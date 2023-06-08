import { getCurrentUser } from "@/actions/getCurrentUser";
import { getUserById } from "@/actions/getUserById";
import Avatar from "@/components/Avatar";
import NavBar from "@/components/NavBar";
import { User } from "@/types/types";
import { redirect } from "next/navigation";

const Page = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    redirect("/login");
  }

  const user: User = await getUserById({ userId: currentUser.id });

  return (
    <main>
      {/* @ts-expect-error Server Component */}
      <NavBar />
      <div className="py-8 px-4 max-w-[1400px] mx-auto">
        <div className="flex items-center gap-4">
          <Avatar big />
          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-bold">{user.name}</h3>
            <h3 className="text-sm font-light">{user.email}</h3>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
