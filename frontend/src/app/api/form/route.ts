import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { contactInfo, message, contactDate } = await req.json();
  const url = `${process.env.SERVER_URL}/callFormSubmissions`;

  try {
    axios.post(url, { contactInfo, message, contactDate });
    return NextResponse.json("ok");
  } catch (e) {
    console.log(e, "form route handler error");
  }
}
