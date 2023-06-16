"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

const Filters = () => {
  const pathName = usePathname();

  const routes = useMemo(
    () => [
      {
        label: "Discover",
        href: "/",
        active: pathName === "/",
      },
      {
        label: "Animation",
        href: "/animation",
        active: pathName === "/animation",
      },
      {
        label: "Branding",
        href: "/branding",
        active: pathName === "/branding",
      },
      {
        label: "Mobile",
        href: "/mobile",
        active: pathName === "/mobile",
      },
      {
        label: "Print",
        href: "/print",
        active: pathName === "/print",
      },
      {
        label: "Typography",
        href: "/typography",
        active: pathName === "/typography",
      },
    ],
    [pathName]
  );

  return (
    <div className="px-4 py-8 max-w-[1400px] mx-auto flex items-center justify-between overflow-x-scroll md:overflow-x-hidden">
      <div>
        <button className="px-3 py-2 rounded-lg border">Following</button>
      </div>
      <div className="flex items-center gap-4">
        {routes.map((route) => {
          return (
            <Link
              key={route.label}
              href={route.href}
              className={`${route.active ? "font-semibold" : "font-light"} ${
                route.active ? "bg-slate-100" : ""
              } px-3 p-2  rounded-md `}
            >
              {route.label}
            </Link>
          );
        })}
      </div>
      <div>
        <button className="px-3 py-2 rounded-lg border">Filters</button>
      </div>
    </div>
  );
};

export default Filters;
