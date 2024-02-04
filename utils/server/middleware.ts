import { NextApiRequest, NextApiResponse } from "next";

// eslint-disable-next-line no-unused-vars
type Handler = (req: NextApiRequest, res: NextApiResponse) => Promise<unknown>;

export const allowCors =
  (fn: Handler) => async (req: NextApiRequest, res: NextApiResponse) => {
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,OPTIONS,PATCH,DELETE,POST,PUT"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
    );

    if (req.method === "OPTIONS") {
      res.status(200).end();
      return;
    }
    return await fn(req, res);
  };

export const allowSelectOrigins = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (process.env.NODE_ENV === "development") {
    return;
  }

  if (
    !req.headers.origin ||
    req.headers.origin in
      ["https://www.typesofants.org", "http://www.typesofants.org"]
  ) {
    console.log("Wrong origin: ", req.headers.origin);
    res.status(405).send("Wrong origin!");
    return res.end();
  }
};
