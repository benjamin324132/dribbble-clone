import { getCurrentUser } from "@/actions/getCurrentUser";
import getShotById from "@/actions/getShotById";
import Heading from "@/components/Heading";
import NavBar from "@/components/NavBar";
import UploadForm from "@/components/UploadForm";
import { Shot } from "@/types/types";
import { redirect } from "next/navigation";

interface IParams {
  shotId: string;
}

const Page = async ({ params }: { params: IParams }) => {
  const currentUser = await getCurrentUser();
  const shot: Shot = await JSON.parse(JSON.stringify(await getShotById({ shotId: params.shotId })));

  if (!currentUser) {
    redirect("/login");
  }

  return (
    <main>
      {/* @ts-expect-error Server Component */}
      <NavBar />
      <div className="py-8 px-4 max-w-[1400px] mx-auto">
        <Heading center title="Edit shot" subtitle="Edit your previous shot" />
        <UploadForm
          shot={shot}
        />
      </div>
    </main>
  );
};

export default Page;
