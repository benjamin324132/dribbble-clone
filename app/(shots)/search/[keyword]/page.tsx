import Content from "@/components/Content";
import Filters from "@/components/Filters";
import Heading from "@/components/Heading";
import NavBar from "@/components/NavBar";
import { Shot } from "@/types/types";

const getShots = async (keyword: string) => {
  const res = await fetch(`http://localhost:3000/api/shots/search/${keyword}`, {
    cache: "no-cache",
  });
  const data = await res.json();
  return data;
};

interface IParams {
  keyword: string;
}

const Page = async ({ params }: { params: IParams }) => {
  const shots: Shot[] = await getShots(params.keyword);
  return (
    <main className="w-full">
      {/* @ts-expect-error Server Component */}
      <NavBar />
      <Filters />
      {shots.length == 0 ? (
        <Heading
          center
          title="Ooops no shots found"
          subtitle="Try searching another"
        />
      ) : (
        <Content shots={shots} />
      )}
    </main>
  );
};

export default Page;
