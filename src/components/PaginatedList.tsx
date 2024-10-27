import React, { ReactNode } from "react";
import Button from "./button";
import { cn } from "@/lib/util";

function PaginatedList({
  title,
  children,
  btnText,
  ...prop
}: {
  title: string;
  children: ReactNode;
  btnText?: string;
  titleClassName?: string;
}) {
  return (
    <div className="w-full flex flex-col gap-4 justify-start items-start">
      <h2
        className={cn(
          "font-semibold text-lg text-[#000000] ",
          prop?.titleClassName
        )}
      >
        {title}
      </h2>
      <div className="grid grid-cols-2 w-full gap-4">{children}</div>
      {btnText && (
        <div className="flex w-full justify-center items-center">
          <Button
            text={btnText}
            className="h-[30px] w-[138px] text-[12px] font-semibold border border-lightGreen bg-lighterGreen text-lightGreen"
          />
        </div>
      )}
    </div>
  );
}

export default PaginatedList;
