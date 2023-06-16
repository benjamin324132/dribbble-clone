import getMoreShotsByUser from "@/actions/getMoreShotsByUser";
import Content from "./Content";
import { Shot } from "@/types/types";

interface MoreShotsByUserProps {
  userId: string;
  userName: string;
}

const MoreShotsByUser = async ({ userId, userName }: MoreShotsByUserProps) => {
  const shots: Shot[] = await getMoreShotsByUser({ userId });

  return (
    <div className=" py-10">
      <h3 className="px-6 font-semibold">More By {userName}</h3>
      <Content shots={shots} showInfo={false} />
    </div>
  );
};

export default MoreShotsByUser;
