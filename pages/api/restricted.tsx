import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });

  if (session) {
    res.send({
      content: "You are signed in!",
    });
  } else {
    res.send({
      error: "You must be signed in to view this message",
    });
  }
};

export default handler;
