import { FC, ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

const Section: FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="container bg-white flex flex-row">
      <div className="flex flex-col w-full gap-y-4  border-b-2 py-6">
        <h1 className="basis-1/4 font-semibold text-2xl ">{title}</h1>
        <div className="basis-3/4 text-secondary-foreground">{children}</div>
      </div>
    </section>
  );
};

export default Section;
