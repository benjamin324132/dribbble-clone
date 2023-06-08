import NavBar from "@/components/NavBar";
import ShotContent from "@/components/ShotContent";
import { Shot } from "@/types/types";

const getShot = async (id: string) => {
  const res  = await fetch(`http://localhost:3000/api/shots/${id}`, { cache: "no-cache"});
  const data = await res.json();
  return data;
}


interface IParams {
  id: string;
}

const Page = async ({ params }: { params: IParams }) => {
  const shot: Shot =  await getShot(params.id);

 

  return (
    <main className="w-full">
      {/* @ts-expect-error Server Component */}
      <NavBar />
      <ShotContent shot={shot} />
    </main>
  );
};

export default Page;
