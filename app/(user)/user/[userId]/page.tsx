import getShotsOfUser from "@/actions/getShotsOfUser";
import { getUserById } from "@/actions/getUserById";
import Avatar from "@/components/Avatar";
import Content from "@/components/Content";
import NavBar from "@/components/NavBar";
import { Shot, User } from "@/types/types";

interface IParams {
  userId: string;
}

const Page = async ({ params }: { params: IParams }) => {
  const user: User = await getUserById({ userId: params.userId });
  const shots: Shot[] = await getShotsOfUser({ userId: params.userId });
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
      <Content shots={shots} showInfo={false} />
    </main>
  );
};

export default Page;
