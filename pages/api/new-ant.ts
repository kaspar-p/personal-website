import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.headers.host === "typesofants.org") {
    console.log("Got new ant suggestion: ", req.body);
    return res.status(200).send({});
  }
}

// -------------------------
//    REED-SOLOMON ROUTES
// -------------------------

// // Sends back the PDF file of the paper
// router.get("/resume", async (req, res) => {
//   return res.sendFile("KasparPoland_Resume.pdf", {
//     root: "client/public/",
//   });
// });

// // -----------------
// //    TEST ROUTES
// // -----------------

// // Test GET method
// router.get("/test", (req, res) => {
//   return res.json({
//     path: "/api/dl/test",
//     method: "GET",
//     status: "SUCCESS",
//   });
// });

// // Test POST method
// router.post("/test", (req, res) => {
//   return res.json({
//     path: "/api/dl/test",
//     method: "POST",
//     status: "SUCCESS",
//   });
// });
