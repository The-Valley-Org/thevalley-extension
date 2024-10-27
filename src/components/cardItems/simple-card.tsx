import { cn } from "@/lib/util";
import Link from "next/link";
import { ReactNode } from "react";

interface Prop {
  imgUrl?: string;
  title?: string;
  P_one?: string;
  P_two?: string;
  link?: string;
  link_text?: string;
  colored_link?: boolean;
  icon?: ReactNode;
}

export default function SimpleCard({ ...prop }: Prop) {
  return (
    <div className="flex gap-3.5 my-4">
      <div
        className={cn(
          "flex items-center justify-center w-16 h-16 rounded-[50%] border text-lightGreen",
          {
            ["border-[#B6E4D0]"]: prop?.icon,
          }
        )}
      >
        {prop?.imgUrl && (
          <img
            src={prop?.imgUrl}
            alt="this is a simple card picture"
            className="block w-full h-full rounded-[50%] object-cover"
          />
        )}

        {prop?.icon && prop?.icon}
      </div>

      <div className="text-xs font-medium">
        <h1 className="text-sm font-semibold">{prop?.title}</h1>
        <p className="text-[#4c5f7d]">{prop?.P_one}</p>
        <p className="text-[#4c5f7d]">{prop?.P_two}</p>

        {prop?.link && (
          <Link
            className={cn("", {
              ["text-lightGreen"]: prop?.colored_link,
            })}
            href={prop?.link}
          >
            {prop?.link_text}
          </Link>
        )}
      </div>
    </div>
  );
}
