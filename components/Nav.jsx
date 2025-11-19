"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Nav = () => {
  const pathname = usePathname();

  const links = [
    {
      name: "home",
      path: "/",
    },
    // {
    //   name: "services",
    //   path: "/services",
    // },
    {
      name: "resume",
      path: "/resume",
    },
    {
      name: "work",
      path: "/work",
    },
    {
      name: "contact",
      path: "/contact",
    },
  ];

  return (
    <nav className="flex gap-8">
      {links.map((item, index) =>(
        <Link
        href={item.path}
        key={index}
        className={`${
          item.path === pathname && "text-accent border-b-2 border-accent"
        } capitalize font-medium hover:text-accent transition-all`}
      >
        {item.name}
      </Link>
      ))}
    </nav>
  );
};

export default Nav;
