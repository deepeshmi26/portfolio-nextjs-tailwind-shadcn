"use client";
import { cx } from "class-variance-authority";
import React from "react";
import ExperienceCard from "./Cards/ExperienceCard";

const TimelineContext = React.createContext({ position: "" });

interface TimelineContainerProps {
  children: React.ReactNode;
}

// -----------------------------TOPMOST CONTAINER----------------------------------- //
export const TimelineContainer: React.FC<TimelineContainerProps> = ({
  children,
}) => {
  return (
    <div className="relative flex flex-col items-center">
      {children}
      <Line />
    </div>
  );
};

// -----------------------------CENTER LINE----------------------------------- //
type LineProps = {
  className?: string;
};

const Line: React.FC<LineProps> = ({ className }) => (
  <div
    className={cx(
      "absolute left-0 md:left-1/2 rounded-full h-full w-[2px] bg-gray-200",
      className
    )}
  ></div>
);

// -----------------------------TIMELINE ITEM----------------------------------- //
interface TimelineItemProps {
  children: React.ReactNode;
  className?: string;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cx(
        "relative w-full flex items-center",
        "md:odd:flex-row-reverse md:odd:justify-end",
        "md:even:justify-end"
      )}
    >
      <div className="h-[2px] bg-gray-200 w-[15px] border-black"></div>
      <div
        className={cx(
          "py-4 bg-white rounded-md w-full md:w-[calc(50%-15px)]",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};
