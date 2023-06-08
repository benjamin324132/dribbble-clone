import dbConnect from "@/lib/dbConnect";
import Shot from "@/models/Shot";
import { NextResponse } from "next/server";

interface IParams {
  shotId: string;
}

export async function GET(request: Request, { params }: { params: IParams }) {
  const { shotId } = params;

  try {
    await dbConnect();

    const shot = await Shot.findById(shotId);

    if (!shot) {
      return new Response("Shot not found", { status: 404 });
    }

    return NextResponse.json(shot);
  } catch (error) {
    return new Response("Something went wrong", { status: 500 });
  }
}
