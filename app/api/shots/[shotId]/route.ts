import { getCurrentUser } from "@/actions/getCurrentUser";
import dbConnect from "@/lib/dbConnect";
import Shot from "@/models/Shot";
import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

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

export async function PUT(
  request: NextRequest,
  { params }: { params: IParams }
) {
  const { shotId } = params;
  const body = await request.json();
  const { img, name, description } = body;
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return new Response("Unauthorized user", { status: 403 });
    }

    await dbConnect();

    const shot = await Shot.findById(shotId);

    if (!shot) {
      return new Response("Shot not found", { status: 404 });
    }

    if (shot.userId !== currentUser.id) {
      return new Response("Unauthorized action", { status: 404 });
    }

    shot.name = name || shot.name;
    shot.img = img || shot.img;
    shot.description = description || shot.description;

    await shot.save();
    revalidateTag(shotId);
    return NextResponse.json(shot);
  } catch (error) {
    return new Response("Something went wrong", { status: 500 });
  }
}
