import Heading from "@/components/Heading";
import UploadForm from "@/components/UploadForm";

const Page = () => {
  return (
    <div className="py-8 px-4 max-w-[1400px] mx-auto">
      <Heading 
      center 
      title="What have you been working on?"
      subtitle="Add a new shot and share your work."
       />
      <UploadForm />
    </div>
  );
};

export default Page;
