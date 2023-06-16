import { Shot } from "@/types/types";
import Content from "./Content";
import getRecomendedShots from "@/actions/getRecomendedShots";

const RecomendedShots = async () => {
  const shots: Shot[] = await getRecomendedShots({ category: "" });

  return (
    <div className=" py-10">
      <h3 className="px-6 font-semibold">You may also like</h3>
      <Content shots={shots} showInfo={false} />
    </div>
  );
};

export default RecomendedShots;
