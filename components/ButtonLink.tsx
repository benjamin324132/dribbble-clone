import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface ButtonLinkProps {
  url: string;
  label: string;
  outlined?: boolean;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ url, label, outlined }) => {
  return (
    <Link
      className={twMerge(
        "px-4 py-2.5 rounded-lg  hover:opacity-80 transition",
        outlined ? "bg-white" : "bg-slate-900",
        outlined ? "border-slate-900 border" : "border-none",
        outlined ? "text-slate-900" : "text-white",
      )}
      href={url}
    >
      {label}
    </Link>
  );
};

export default ButtonLink;
