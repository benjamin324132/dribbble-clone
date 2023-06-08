import { getCurrentUser } from "@/actions/getCurrentUser";
import Heading from "@/components/Heading";
import NavBar from "@/components/NavBar";
import UploadForm from "@/components/UploadForm";
import { redirect } from "next/navigation";

const Page = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    redirect("/login");
  }

  return (
    <main>
      {/* @ts-expect-error Server Component */}
      <NavBar />
      <div className="py-8 px-4 max-w-[1400px] mx-auto">
        <Heading
          center
          title="What have you been working on?"
          subtitle="Add a new shot and share your work."
        />
        <UploadForm />
      </div>
    </main>
  );
};

export default Page;
