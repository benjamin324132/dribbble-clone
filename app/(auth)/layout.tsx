import { getCurrentUser } from "@/actions/getCurrentUser";
import Link from "next/link";
import { redirect } from "next/navigation";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default async function AuthLayout({ children }: AuthLayoutProps) {
    const currentUser = await getCurrentUser();

  if(currentUser){
      redirect("/");
  }

  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <Link
        className="px-3 py-2.5 border rounded-md font-semibold absolute top-5 left-5"
        href="/"
      >
        Go Back
      </Link>
      {children}
    </div>
  );
}
