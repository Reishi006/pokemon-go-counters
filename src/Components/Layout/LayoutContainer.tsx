import { ReactNode } from "react";

interface LayoutContainerProps {
  children: ReactNode;
  title?: string;
}

export default function LayoutContainer({
  children,
  title,
}: LayoutContainerProps) {
  return (
    <aside className="p-5 bg-sky-500">
      {title && title !== "" ? (
        <h3 className="m-1 p-2 text-lg">{title}</h3>
      ) : undefined}
      <section className="h-24 bg-sky-600 rounded-md">{children}</section>
    </aside>
  );
}