import dbConnect from "@/lib/dbConnect";
import Shot from "@/models/Shot";

interface IParams {
    userId: string;
}

export default async function getShotsOfUser(params: IParams){
     const { userId } = params;
    try {
        await dbConnect();

        const shots = await Shot.find({userId})

        return shots;
    } catch (error) {
        return [];
    }
}