import NavBar from "@/components/NavBar";
import ShotContent from "@/components/ShotContent";
import { Shot } from "@/types/types";
import { Metadata } from "next";

interface IParams {
  id: string;
}

const getShot = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/shots/${id}`, {
    cache: "default",
    next: { tags: [id] },
  });
  const data = await res.json();
  return data;
};

export const generateMetadata = async ({
  params,
}: {
  params: IParams;
}): Promise<Metadata> => {
  const shot: Shot = await getShot(params.id);
  return {
    title: shot.name,
    description: shot.description,
  };
};

const Page = async ({ params }: { params: IParams }) => {
  const shot: Shot = await getShot(params.id);

  return (
    <main className="w-full">
      {/* @ts-expect-error Server Component */}
      <NavBar />
      <ShotContent shot={shot} />
    </main>
  );
};

export default Page;
