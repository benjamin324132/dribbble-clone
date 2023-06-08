import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";

interface IParams {
    userId: string;
}
export async function getUserById(params: IParams) {

  try {
    await dbConnect();

    const user = await User.findById(params.userId);

    return user;
  } catch (error) {
    return null;
  }
}
