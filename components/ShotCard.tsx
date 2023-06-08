import { Shot } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import ShotImage from "./ShotImage";

interface ShotCardProps {
  shot: Shot;
  showInfo?: boolean;
}

const ShotCard: React.FC<ShotCardProps> = ({ shot, showInfo }) => {
  return (
    <div className="col-span-1 cursor-pointer group">
      <div className="flex flex-col gap-2 w-full">
        <ShotImage id={shot._id} name={shot.name} img={shot.img} />
        {showInfo ? (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div>
                <div className="aspect-square w-7 h-7 relative overflow-hidden rounded-full">
                  <Image
                    fill
                    className="object-cover h-full w-full"
                    src={shot.userAvatar ?? "/images/placeholder.jpg"}
                    alt={shot.userName}
                  />
                </div>
              </div>
              <Link
                href={`/user/${shot.userId}`}
                className="font-bold truncate"
              >
                {shot.userName}
              </Link>
              <span className=" text-white rounded-md py-[1px] px-1 bg-gray-300 text-xs hover:bg-[#ea4c89] font-extrabold transition">
                PRO
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-neutral-500">{shot.likeCount}</span>
              <span className="text-xs text-neutral-500">{shot.viewCount}</span>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ShotCard;
