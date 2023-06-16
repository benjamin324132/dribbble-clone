"use client";

import Link from "next/link";
import Avatar from "./Avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { signOut } from "next-auth/react";

interface UserAccountNavProps {
  userName?: string | null;
  email?: string | null;
  userId: string;
}

const UserAccountNav: React.FC<UserAccountNavProps> = ({ userName, email, userId }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="z-50 min-w-[8rem] overflow-hidden rounded-md border bg-white p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
      >
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            {userName && <p className="font-medium">{userName}</p>}
            {email && (
              <p className="w-[200px] truncate text-sm text-muted-foreground">
                {email}
              </p>
            )}
          </div>
        </div>
        <DropdownMenuSeparator className="-mx-1 my-1 h-px bg-gray-200" />
        <DropdownMenuItem
          className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
          asChild
        >
          <Link href="/account">Account</Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
          asChild
        >
          <Link href={`/user/${userId}`}>My Shots</Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
          asChild
        >
          <Link href="/account/settings">Settings</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="-mx-1 my-1 h-px bg-gray-200" />
        <DropdownMenuItem
          className=" cursor-pointer relative flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
          onSelect={(event: any) => {
            event.preventDefault();
            signOut({
              callbackUrl: `${window.location.origin}/login`,
            });
          }}
        >
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAccountNav;
