import Content from "@/components/Content";
import Filters from "@/components/Filters";
import NavBar from "@/components/NavBar";
import { Shot } from "@/types/types";

const getShots = async () => {
  const res  = await fetch("http://localhost:3000/api/shots", { cache: "no-store" });
  const data = await res.json();
  return data;
}

export const revalidate = 0;

export default async function Home() {
  const shots: Shot[] = await getShots();

  return (
    <main className="w-full">
      {/* @ts-expect-error Server Component */}
      <NavBar />
      <Filters />
      <Content shots={shots} />
    </main>
  );
}
