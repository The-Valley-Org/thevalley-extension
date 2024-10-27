import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

export default function Section({ ...prop }: Props) {
  return (
    <section className="py-4 border-b">
      <h1 className="text-xs font-semibold">{prop?.title}</h1>

      <div>{prop?.children}</div>
    </section>
  );
}
