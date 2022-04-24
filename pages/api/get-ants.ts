import mysql from "mysql";
import { NextApiRequest, NextApiResponse } from "next";

const createConfigObject = () => {
  switch (process.env.NODE_ENV) {
    case "development":
    case "test":
      return {
        host: process.env.DB_ENDPOINT_DEV,
        database: process.env.DB_NAME_DEV,
        user: process.env.DB_USERNAME_DEV,
        password: process.env.DB_PASSWORD_DEV,
      };
    case "production":
      return {
        host: process.env.DB_ENDPOINT_PROD,
        database: process.env.DB_NAME_PROD,
        user: process.env.DB_USERNAME_PROD,
        password: process.env.DB_PASSWORD_PROD,
      };
  }
};

interface ResponseObject {
  status: number;
  data: any;
}
function createResponseObject(status: number, data: any): ResponseObject {
  return {
    status,
    data,
  };
}

async function getAnts(req: NextApiRequest, res: NextApiResponse) {
  const connection = mysql.createConnection(createConfigObject());
  connection.connect();

  if (req.method !== "GET") {
    res
      .status(405)
      .json(createResponseObject(405, { msg: "Only GET allowed!" }));
    return res.end();
  }
  const antsQuery = "select * from ants";
  console.log(createConfigObject());

  connection.query(antsQuery, (error, result) => {
    console.log("here");
    if (error) {
      res.status(500).json({ error });
      throw error;
    }

    console.log(result);
    res.status(200).json(createResponseObject(200, result));
    return res.end();
  });

  console.log("after");
}

export default getAnts;
