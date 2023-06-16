import dbConnect from "@/lib/dbConnect";
import Shot from "@/models/Shot";

interface IParams {
    category: string;
}

export default async function getRecomendedShots(params: IParams){
     const { category } = params;
    try {
        await dbConnect();

        const shots = await Shot.find({}).limit(8);

        return shots;
    } catch (error) {
        return [];
    }
}