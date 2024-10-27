import { cn } from "@/lib/util";
import Link from "next/link";
import { ReactNode } from "react";
import { FaPlay } from "react-icons/fa";

interface Prop {
  title?: string;
  link: string;
  thumbnail: string;
  link_text?: string;
}

export default function VideoCard({ ...prop }: Prop) {
  return (
    <Link href={prop?.link}>
      <div className="flex gap-3.5 my-4">
        <div
          className={cn(
            "flex items-center justify-center w-12 h-12 rounded-lg border text-lightGreen border-[#B6E4D0] relative"
          )}
        >
          <img
            src={prop?.thumbnail}
            alt="this is a simple card picture"
            className="block w-full h-full rounded-lg object-cover"
          />

          <div className="absolute inset-0 bg-[rgba(0, 0, 0, 0.30)] flex items-center justify-center text-white">
            <FaPlay />
          </div>
        </div>

        <div className="text-xs font-medium">
          <h1 className="text-sm font-semibold">{prop?.title}</h1>

          <p className={cn("text-lightGreen")}>{prop?.link_text}</p>
        </div>
      </div>
    </Link>
  );
}
