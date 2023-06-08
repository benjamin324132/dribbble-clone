import { Shot } from "@/types/types";
import Avatar from "./Avatar";
import Image from "next/image";

interface ShotContentProps {
  shot: Shot;
}

const ShotContent: React.FC<ShotContentProps> = ({ shot }) => {
  return (
    <div className="px-6 py-4 max-w-[1000px] mx-auto">
      <div className="max-w-[800px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <Avatar big src={shot.userAvatar} />
          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-bold">{shot.name}</h3>
            <div className="flex items-center gap-x-2">
              <h3 className="text-sm font-light">{shot.userName}</h3>•
              <h3 className="text-sm font-light">Follow</h3>•
              <h3 className=" text-[#ea4c89] text-sm font-light">Hire Us</h3>
            </div>
          </div>
        </div>
        <div className="flex gap-4 mt-3 md:mt-0">
            <button className="px-3 py-1.5 rounded-lg bg-gray-200 hover:opacity-80 transition font-semibold">Save</button>
            <button className="px-3 py-1.5 rounded-lg bg-[#ea4c89] text-white hover:opacity-80 transition font-semibold">Like</button>
        </div>
      </div>
      <div className="mt-8 aspect-square w-full h-full relative overflow-hidden rounded-xl">
        <Image className="object-cover h-full w-full transition" src={shot.img} alt={shot.name} fill />
      </div>
      <div className="mt-16 max-w-[600px] mx-auto">
        {shot.description ? <p className="text-xl">{shot.description}</p> : null}
      </div>
    </div>
  );
};

export default ShotContent;
