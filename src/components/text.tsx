import { cn } from "@/lib/util";

interface Props {
  title: string;
  text: string;
  titleClassName?: string;
  textClassName?: string;
  containerClassName?: string;
}

export default function Text({ ...prop }: Props) {
  return (
    <div
      className={cn(
        "border-b py-4 text-xs font-semibold leading-[18px]",
        prop?.containerClassName
      )}
    >
      <h1 className={cn("font-semibold", prop?.titleClassName)}>
        {prop?.title}
      </h1>
      <p className={cn("text-[#212630] font-medium", prop?.textClassName)}>
        {prop?.text}
      </p>
    </div>
  );
}
