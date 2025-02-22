import React, { ReactNode } from "react";

function Main({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <main className="max-w-[360px] bg-background">{children}</main>;
}

export default Main;
