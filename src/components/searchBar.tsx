import { cn } from "@/lib/util";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";
export default function SearchBar({
  className,
  placeholder,
  border = true,
  onChange,
  defaultValue,
}: {
  className?: string;
  children?: JSX.Element | JSX.Element[];
  placeholder?: string;
  border?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string;
}) {
  return (
    <div className="flex justify-start gap-2">
        <div
        className={cn(
            "h-[38px] md:h-[48px] relative grow max-w-[650px] rounded-[8px] py-1 px-2 md:px-4 flex justify-start items-center gap-[10px] bg-[#FFFFFF]",
            {
                "border-[1px] border-[#D3D9E4]": border,
            },
            className
        )}
        >
        <FaSearch size="16px" color="#D3D9E4"/>
        <input
            className="h-full flex-1 text-black text-base bg-[#FFFFFF] border-none outline-0 w-[95%]"
            type="search"
            placeholder={placeholder}
            onChange={onChange}
            defaultValue={defaultValue}
            />
        </div>

        <button className="h-12 w-12 rounded-[8px] flex justify-center items-center border border-[#D3D9E4] bg-white">
            <Image
            src="/filter.svg"
            alt="filter icon"
            height={16}
            width={16}
            className="h-4 w-4 object-contain"
            />
        </button>
    </div>
  );
}
