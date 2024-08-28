import { NextApiRequest, NextApiResponse } from "next";
import { SignupResponse } from "../../types/signup";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SignupResponse>
) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Method Not Allowed" });
  }

  const { email } = req.body;

  if (!email) {
    return res
      .status(400)
      .json({ success: false, message: "Email is required" });
  }

  try {
    const formId = process.env.CONVERTKIT_FORM_ID;
    const response = await fetch(
      `https://api.convertkit.com/v3/forms/${formId}/subscribe`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          api_key: process.env.CONVERTKIT_API_KEY,
        }),
      }
    );

    if (response.ok) {
      return res
        .status(200)
        .json({ success: true, message: "Email added successfully" });
    } else {
      res.status(200).json({ success: false, message: "Subscription failed." });
    }
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
}
