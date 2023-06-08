import AuthForm from "@/components/Authform";
import Link from "next/link";

const Page = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <Link
        className="px-3 py-2.5 border rounded-md font-semibold absolute top-5 left-5"
        href="/"
      >
        Go Back
      </Link>
      <AuthForm isRegister />
    </div>
  );
};

export default Page;
