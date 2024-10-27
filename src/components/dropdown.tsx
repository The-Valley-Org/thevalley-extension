"use client";

import { cn } from "@/lib/util";
import { ReactNode, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface Prop {
  label?: string;
  desc?: string;
  children?: ReactNode;
}

export default function DropDown({ ...prop }: Prop) {
  const [openDropdown, setOpenDropdown] = useState(false);

  const toggleDropdown = () => setOpenDropdown(!openDropdown);

  return (
    <div className="border rounded-lg px-4 py-5">
      <div className="flex items-center justify-between">
        <h1 className="text-xs font-medium">{prop?.label}</h1>

        <button type="button" onClick={toggleDropdown}>
          {!openDropdown ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </button>
      </div>

      <p className="text-xs text-[#8094B0] leading-[18px]">{prop?.desc}</p>

      <div
        className={cn(
          "grid grid-rows-[0] overflow-hidden transition-all ease-in ",
          openDropdown && "grid-rows-[1fr]"
        )}
      >
        {prop?.children}
      </div>
    </div>
  );
}
