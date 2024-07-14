import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "../dialog";
import { ClassValue } from "clsx";
import { FC } from "react";
import { ClassNameValue } from "tailwind-merge";
import { Button } from "../Button";
import { DialogHeader, DialogFooter } from "../dialog";

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  img: string;
  className?: ClassValue;
  description?: string;
}

const ExperienceCard: FC<ExperienceCardProps> = ({
  title,
  img,
  company,
  period,
  className,
  description,
}) => {
  return (
    <div
      className={cn(
        "border hover:shadow-xl group/experience transition duration-200 rounded-md shadow-md bg-white",
        className
      )}
    >
      <div className="group-hover/experience:translate-x-2 transition duration-200 border-b p-4 flex flex-col gap-4">
        <div className="flex flex-row items-center gap-2">
          <img
            src={img}
            alt="Profile"
            className="w-12 h-12 shadow-xl rounded-full border"
          />
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-gray-600">{company}</p>
          </div>
        </div>
        <p className="text-gray-400 text-sm">{period}</p>
        <p
          className="text-sm line-clamp-4"
          dangerouslySetInnerHTML={{ __html: description as any }}
        />
      </div>
      <div className="flex w-full items-end justify-end py-2 px-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="link">Show more</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <div className="flex flex-row items-center gap-2">
              <img
                src={img}
                alt="Profile"
                className="w-12 h-12 shadow-xl rounded-full border"
              />
              <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-gray-600">{company}</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">{period}</p>
            <p
              className="text-sm"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default ExperienceCard;
