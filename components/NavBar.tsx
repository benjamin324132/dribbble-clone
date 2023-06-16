import DribbbleIcon from "@/icons/dribbble";
import Link from "next/link";
import ButtonLink from "./ButtonLink";
import Avatar from "./Avatar";
import { getCurrentUser } from "@/actions/getCurrentUser";
import UserAccountNav from "./UserAccountNav";
import SearchForm from "./SearchForm";

const NavBar = async () => {
  const currentUser = await getCurrentUser();

  return (
    <nav className="px-4 py-8 max-w-[1400px] mx-auto flex items-center justify-between">
      <div className="flex items-center gap-6">
        <div>
          <Link href="/">
            <DribbbleIcon />
          </Link>
        </div>
        <div className="items-center gap-6 hidden md:flex">
          <Link href="#" className="font-semibold text-sm hover:opacity-80">
            Find talent
          </Link>
          <Link href="#" className="font-semibold text-sm hover:opacity-80">
            For Designers
          </Link>
          <Link href="#" className="font-semibold text-sm hover:opacity-80">
            Inspiration
          </Link>
          <Link href="#" className="font-semibold text-sm hover:opacity-80">
            Learn design
          </Link>
          <Link
            href="#"
            className="font-bold text-sm text-[#ea4c89] hover:opacity-80"
          >
            Go Pro
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <SearchForm />
        {currentUser ? (
          <>
            <ButtonLink url="/uploads/new" label="Share Work" />
            <UserAccountNav
              userName={currentUser?.name}
              email={currentUser.email}
              userId={currentUser.id}
            />
          </>
        ) : (
          <>
            <ButtonLink url="/login" label="Login" />
            <ButtonLink outlined url="/register" label="Sign up" />
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
