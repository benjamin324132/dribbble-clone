import dbConnect from "@/lib/dbConnect";
import Shot from "@/models/Shot";
import { NextResponse } from "next/server";

interface IParams {
  keyword: string;
}

export async function GET(request: Request, { params }: { params: IParams }) {
  const { keyword } = params;

  const search = {
    $or: [
      {
        name: {
          $regex: keyword,
          $options: "i",
        },
      },
      {
        description: {
          $regex: keyword,
          $options: "i",
        },
      },
    ],
  };

  try {
    await dbConnect();

    const shot = await Shot.find({ ...search });

    if (!shot) {
      return new Response("Shots not found", { status: 404 });
    }

    return NextResponse.json(shot);
  } catch (error) {
    return new Response("Something went wrong", { status: 500 });
  }
}
