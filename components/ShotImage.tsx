import Image from "next/image";
import Link from "next/link";

interface ShotImageProps {
  id: string;
  name: string;
  img: string;
}

const ShotImage: React.FC<ShotImageProps> = ({ id, name, img }) => {
  return (
    <Link href={`/shots/${id}`}>
      <div className="aspect-square w-full h-60 relative overflow-hidden rounded-xl">
        <Image
          fill
          className="object-cover h-full w-full transition"
          src={img}
          alt={name}
        />
        <div className="hidden absolute bottom-0 left-0 right-0 group-hover:block px-4 py-5 transition bg-gradient-to-b from-black/5 to-black/40">
          <h3 className="font-semibold text-white">{name}</h3>
        </div>
      </div>
    </Link>
  );
};

export default ShotImage;
