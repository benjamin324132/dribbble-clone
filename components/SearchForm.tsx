import { redirect } from "next/navigation";

const SearchForm = () => {
  const onSubmit = async (data: FormData) => {
    "use server";
    const keyword = data.get("search") as string;
    if (keyword) {
      redirect(`/search/${keyword}`);
    } else {
      redirect("/");
    }
  };

  return (
    <form action={onSubmit}>
      <input
        name="search"
        className="bg-[#f4f5fb] px-4 py-2.5 rounded-full outline-none font-light hidden md:block"
        placeholder="Search..."
      />
    </form>
  );
};

export default SearchForm;
