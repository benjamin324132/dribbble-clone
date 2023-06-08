import Image from "next/image";

interface AvatarProps {
  src?: string | null | undefined;
  big?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ src, big }) => {
  return (
    <Image
      src={src || "/images/placeholder.jpg"}
      height={big ? "50" :"35"}
      width={big ? "50" :"35"}
      alt="avatar"
      className=" rounded-full"
    />
  );
};

export default Avatar;
