import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import Link from "next/link";
import { FC } from "react";
import { ClassNameValue } from "tailwind-merge";
import { Button } from "../Button";

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  img: string;
  className?: ClassValue;
  description?: string;
}

const ProjectCard: FC<ExperienceCardProps> = ({
  title,
  img,
  className,
  description,
  link,
}) => {
  return (
    <div
      className={cn(
        "border rounded-md shadow-md bg-white flex flex-row gap-4 p-4 h-32",
        className
      )}
    >
      <div className="rounded-md overflow-hidden h-24 w-24">
        <img src={img} />
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <h1 className="font-bold text-xl">{title}</h1>
        <p className="line-clamp-2 text-sm">{description}</p>
        <div className="p-0 h-fit w-full flex flex-row  items-end justify-end">
          <Button variant="link" className="p-0 h-fit w-fit">
            <Link href={""} className="text-xs">
              View project
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
