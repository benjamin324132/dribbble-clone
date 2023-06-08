import { Shot } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

interface ShotCardProps {
  shot: Shot;
}

const ShotCard: React.FC<ShotCardProps> = ({ shot }) => {
  return (
    <div className="col-span-1 cursor-pointer group">
      <div className="flex flex-col gap-2 w-full">
        <Link href={`/shots/${shot._id}`}>
        <div
          className="
            aspect-square 
            w-full 
            h-60
            relative 
            overflow-hidden 
            rounded-xl
          "
        >
          <Image
            fill
            className="
              object-cover 
              h-full 
              w-full 
              transition
            "
            src={shot.img}
            alt={shot.name}
          />
          <div className=" hidden absolute bottom-0 left-0 right-0 group-hover:block px-4 py-5 transition bg-gradient-to-b from-black/5 to-black/40">
            <h3 className=" font-semibold text-white">{shot.name}</h3>
          </div>
        </div>
        </Link>
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
            <h3 className="font-bold truncate">{shot.userName}</h3>
            <span className=" text-white rounded-md py-[1px] px-1 bg-gray-300 text-xs hover:bg-[#ea4c89] font-extrabold transition">PRO</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-neutral-500">{shot.likeCount}</span>
            <span className="text-xs text-neutral-500">{shot.viewCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShotCard;
