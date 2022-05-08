import { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";
import sgClient from "@sendgrid/client";
import { allowSelectOrigins, allowCors } from "../../utils/server/middleware";
import {
  welcomeEmailHtml,
  welcomeEmailText,
} from "../../utils/server/welcome_email";
import { ClientRequest } from "@sendgrid/client/src/request";

type FlowType = "done" | "ask" | "subscribe" | "send";
interface CustomResponse {
  status: number;
  msg: string;
  flow: FlowType;
  userExists?: boolean;
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);
sgClient.setApiKey(process.env.SENDGRID_API_KEY as string);

const sanitizeEmail = (email: string): string => {
  return email.toLowerCase();
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await allowSelectOrigins(req, res);

  console.log("New request received with body: ", req.body);
  if (!process.env.SENDGRID_API_KEY || !process.env.SENDGRID_CONTACT_LIST_ID) {
    res.status(500).json({ status: 500, msg: "Invalid secrets!" });
    return res.end();
  }

  if (!req.body) {
    console.log("Request body not defined! Exiting!");
    res.status(400).json({ status: 400, msg: "Email is required" });
    return res.end();
  }

  let flow: FlowType = "ask";

  const contact = {
    email: sanitizeEmail(req.body),
  };

  try {
    // See if a user is already subscribed
    const askForUserRequest: ClientRequest = {
      url: "/v3/marketing/contacts/search",
      method: "POST",
      body: {
        query: `email = '${contact.email}'`,
      },
    };

    let body;
    try {
      [, body] = await sgClient.request(askForUserRequest);
      console.log("-> Asked for user existence: ", contact.email);
    } catch (error: any) {
      flow = "ask";
      throw error;
    }

    const contactExists = body.contact_count > 0;
    if (contactExists) {
      console.log(
        `-> Contact with email ${contact.email} already exists. Ending request.`
      );

      const response: CustomResponse = {
        status: 200,
        userExists: true,
        flow: "ask",
        msg: "Contact already subscribed!",
      };
      res.status(200).json(response);
      return res.end();
    }

    const subscriptionRequest: ClientRequest = {
      url: "/v3/marketing/contacts",
      method: "PUT",
      body: {
        list_ids: [process.env.SENDGRID_CONTACT_LIST_ID],
        contacts: [contact],
      },
    };
    try {
      await sgClient.request(subscriptionRequest);
      console.log("-> Subscribed new contact with email: ", contact.email);
    } catch (error) {
      flow = "subscribe";
      throw error;
    }

    const welcomeEmail = {
      to: contact.email,
      from: "kaspar@typesofants.org",
      subject: "welcome to the typesofants.org monthly newsletter!",
      text: welcomeEmailText,
      html: welcomeEmailHtml,
    };
    try {
      await sgMail.send(welcomeEmail);
      console.log("-> Sent welcome email to contact: ", contact.email);
    } catch (error) {
      flow = "send";
      throw error;
    }

    const response: CustomResponse = {
      status: 200,
      flow: "done",
      msg: "Subscribed!",
    };
    res.status(200).json(response);
  } catch (error: any) {
    console.log(`Error encountered during flow '${flow}'!`, JSON.parse(error));
    if (error.response) console.log("Error body: ", error.response.body);

    const response: CustomResponse = {
      status: 500,
      flow,
      msg: error,
    };
    res.status(500).json(response);
  } finally {
    res.end();
  }
};

export default allowCors(handler);
