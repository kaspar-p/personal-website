import { NextApiRequest, NextApiResponse } from "next";
import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_KEY,
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("Subscription request!", req.body);
  if (!process.env.MAILCHIMP_AUDIENCE_ID) {
    res.status(500).json({ status: 500, msg: "Invalid audience ID!" });
    return res.end();
  }

  if (!req.body) {
    res.status(400).json({ status: 400, msg: "Email is required" });
    return res.end();
  }

  try {
    console.log(`Adding newsletter subscriber: '${req.body}'!`);
    await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
      email_address: req.body,
      status: "subscribed",
    });

    res.status(200).json({ status: 200, msg: "Subscribed!" });
  } catch (error: any) {
    console.log("Error encountered!", JSON.parse(error.response.error.text));
    if (
      error?.response?.error?.text &&
      JSON.parse(error.response.error.text).title === "Member Exists"
    ) {
      res.status(500).json({ status: 500, msg: "exists" });
    } else {
      res.status(500).json({ status: 500, msg: error });
    }
  } finally {
    res.end();
  }
};

export default handler;
