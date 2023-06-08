import { Shot } from "@/types/types";
import ShotCard from "./ShotCard";

interface ContentProps {
  shots: Shot[];
  showInfo?: boolean;
}

const Content: React.FC<ContentProps> = ({ shots, showInfo = true }) => {
  return (
    <div className="px-6 py-8 max-w-[1400px] mx-auto grid gap-9 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {shots.map((shot) => (
        <ShotCard key={shot._id} shot={shot} showInfo={showInfo} />
      ))}
    </div>
  );
};

export default Content;
