import dbConnect from "@/lib/dbConnect";
import Shot from "@/models/Shot";

interface IParams {
  shotId: string;
}

export default async function getShotById(params: IParams) {
  const { shotId } = params;

  try {
    await dbConnect();

    const shot = await Shot.findById(shotId);

    return shot;
  } catch (error) {
    throw new Error("Something went wrong");
  }
}
