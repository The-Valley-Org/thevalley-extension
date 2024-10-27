"use client";

import React from "react";
import Logo from "./logo";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/util";
import { usePathname } from "next/navigation";

const icons = [
  {
    path: "/history",
    icon: "/nav/time.svg",
  },
  {
    path: "/support",
    icon: "/nav/headphones.svg",
  },
  {
    path: "/settings",
    icon: "/nav/settings.svg",
  },
  {
    path: "/cancel",
    icon: "/nav/cancel.svg",
  },
];

function HeaderNav() {
  return (
    <header className="z-50 px-4 h-[72px] w-full max-w-[360px] bg-lightGreen flex justify-between items-center fixed top-0 left-0">
      <Logo />

      <nav className="flex justify-start">
        {icons.map((link) => (
          <NavItem iconSrc={link?.icon} key={link?.path} path={link?.path} />
        ))}
      </nav>
    </header>
  );
}

export default HeaderNav;

function NavItem({ iconSrc, path }: { iconSrc: string; path: string }) {
  const pathname = usePathname();

  return (
    <Link href={path}>
      <button
        className={cn(
          "flex justify-center items-center h-10 w-10 bg-lightGreen rounded-md hover:bg-darkGreen transition-all duration-300 ease",
          {
            ["bg-darkGreen"]: pathname === path,
          }
        )}
      >
        <Image
          src={iconSrc}
          alt="Navigation header icon"
          height={20}
          width={20}
          className="w-5 h-5 object-contain"
        />
      </button>
    </Link>
  );
}
