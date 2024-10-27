import { LuPencilLine } from "react-icons/lu";
import DetailsCard from "../cardItems/details-card";
import { ReactNode } from "react";

interface Prop {
  title: string;
  children: ReactNode;
}

export default function ProfileTopSection({ ...prop }: Prop) {
  return (
    <div className="border-b">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-sm">{prop?.title}</h1>

        <button className="flex items-center gap-2 text-sm font-medium text-lightGreen">
          <LuPencilLine />
          Edit Profile
        </button>
      </div>

      {prop?.children}
    </div>
  );
}
