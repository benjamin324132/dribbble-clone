import getMoreShotsByUser from "@/actions/getMoreShotsByUser";
import Content from "./Content";
import { Shot } from "@/types/types";


interface MoreShotsByUserProps {
    userId: string;
}

const MoreShotsByUser = async ({userId}: MoreShotsByUserProps) =>{
    const shots: Shot[] = await getMoreShotsByUser({ userId });

    return <div className=" py-10">
        <Content shots={shots} showInfo={false} />
    </div>
}

export default MoreShotsByUser;