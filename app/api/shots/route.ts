import { getCurrentUser } from "@/actions/getCurrentUser";
import dbConnect from "@/lib/dbConnect";
import Shot from "@/models/Shot";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { img, name, description } = body;

  if (!name || !img) {
    return new Response("Invalid data", { status: 400 });
  }

  const currentUser = await getCurrentUser();

  if(!currentUser) {
    return new Response("Unhaturized user", {  status: 403 });
  }



  try {
    await dbConnect();

    const shot = await Shot.create({
      img,
      name,
      description,
      userAvatar: currentUser.image,
      userName: currentUser.name,
      userId: currentUser.id
    });

    return NextResponse.json(shot);
  } catch (error) {
    return new Response("Something went wrong", { status: 500 });
  }
}

export async function GET() {
  try {
    await dbConnect();
    const shots = await Shot.find();
    return NextResponse.json(shots);
  } catch (error) {
    return new Response("Something went wrong", { status: 500 });
  }
}
