import dbConnect from "@/lib/dbConnect";
import Shot from "@/models/Shot";

interface IParams {
    userId: string;
}

export default async function getMoreShotsByUser(params: IParams){
     const { userId } = params;
    try {
        await dbConnect();

        const shots = await Shot.find({userId}).limit(4);

        return shots;
    } catch (error) {
        return [];
    }
}