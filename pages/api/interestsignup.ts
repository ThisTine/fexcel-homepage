// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { google } from "googleapis";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  success: boolean
  error?: string
};
type requ = {
  email: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {email} = req.body
  console.log(req)
  if(!email){
    return res.status(400).json({ success:false,error:"No Email !"})
  }
  try{
    const auth = await google.auth.getClient({
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      // keyFile:"./json/secrets.json",
      credentials: { type: process.env.type || "",
      token_url:  process.env.token_uri || "",
      private_key: (process.env.private_key||"").replace(/\\n/g, '\n'),
      client_email: process.env.client_email ||"",
      client_id: process.env.client_id||"",
    }
    });
    
    const sheets = google.sheets({ version: "v4", auth });
    //@ts-ignores
    const data = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SHEET_ID,
      range: "Interest!A:A",
      valueInputOption:"USER_ENTERED",
      resource:{
        values: [[email]]
      }
      // re
    });
    return res.status(200).json({success:true})
  }catch(err){
    console.log(err)
    return res.status(500).json({ success:false,error:"error"})
  }
  
}
