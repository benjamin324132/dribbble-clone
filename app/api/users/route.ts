import bcrypt from "bcrypt";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, password } = body;

  if (!name || !email || !password) {
    return new Response("Credentials not provided", { status: 400 });
  }

  try {
    await dbConnect();

    const userExist = await User.findOne({ email });

    if (userExist) {
      return new Response("User already exists", { status: 400 });
    }

    const hashedPassword  = await bcrypt.hash(password, 12);

    const user = await User.create({
        name,
        email,
        hashedPassword
    })

  
    return NextResponse.json(user);

  } catch (error) {
    return new Response("Seomething went wrong", { status: 500});
  }
}
