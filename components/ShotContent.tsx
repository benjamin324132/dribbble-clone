import { Shot } from "@/types/types";
import Avatar from "./Avatar";
import Image from "next/image";
import Link from "next/link";
import MoreShotsByUser from "./MoreShotsByUser";
import { Suspense } from "react";
import RecomendedShots from "./RecomendedShots";

interface ShotContentProps {
  shot: Shot;
}

const ShotContent: React.FC<ShotContentProps> = ({ shot }) => {
  return (
    <div className="px-4 py-4 max-w-[1400px] mx-auto">
      <div className="max-w-[800px] mx-auto">
        <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <Link href={`/user/${shot.userId}`}>
              <Avatar big src={shot.userAvatar} />
            </Link>
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-bold">{shot.name}</h3>
              <div className="flex items-center gap-x-2">
                <Link
                  href={`/user/${shot.userId}`}
                  className="text-sm font-light"
                >
                  {shot.userName}
                </Link>
                •<h3 className="text-sm font-light">Follow</h3>•
                <h3 className=" text-[#ea4c89] text-sm font-light">Hire Us</h3>
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-3 md:mt-0">
            <button className="px-3 py-1.5 rounded-lg bg-gray-200 hover:opacity-80 transition font-semibold">
              Save
            </button>
            <button className="px-3 py-1.5 rounded-lg bg-[#ea4c89] text-white hover:opacity-80 transition font-semibold">
              Like
            </button>
          </div>
        </div>

        <div className="mt-8 aspect-square w-full h-full relative overflow-hidden rounded-xl">
          <Image
            className="object-cover h-full w-full transition"
            src={shot.img}
            alt={shot.name}
            fill
          />
        </div>
      </div>

      <div className="mt-16 max-w-[600px] mx-auto">
        {shot.description ? (
          <p className="text-xl">{shot.description}</p>
        ) : null}
      </div>
      <div className="py-10 flex flex-col items-center gap-6">
        <div className="flex items-center w-full">
          <div className=" border-b border-1 flex-1" />
          <Link href={`/user/${shot.userId}`} className=" p-4">
            <Avatar big />
          </Link>
          <div className=" border-b flex-1" />
        </div>
        <Link className=" text-3xl font-bold" href={`/user/${shot.userId}`}>
          {shot.userName}
        </Link>
        <button className="px-3 py-2 rounded-lg bg-[#ea4c89] text-white hover:opacity-80 transition font-semibold">
          Hire Me
        </button>
      </div>
      <Suspense fallback={<span>Loading</span>}>
        {/* @ts-expect-error Server Component */}
        <MoreShotsByUser userId={shot.userId} userName={shot.userName} />
      </Suspense>
      <div>
        <div className="border-b border-1 flex-1" />
        <Suspense fallback={<span>Loading</span>}>
          {/* @ts-expect-error Server Component */}
          <RecomendedShots />
        </Suspense>
      </div>
    </div>
  );
};

export default ShotContent;
