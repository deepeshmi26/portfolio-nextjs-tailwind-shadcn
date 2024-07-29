import { FC } from "react";
import Image from "next/image";
import { Button } from "./ui/Button";
const PorfolioHeader: FC = () => {
  return (
    <div className="w-full h-[250px] lg:h-[300px]  overflow-hidden shadow-lg">
      <div className="container p-0 bg-transparent h-full flex flex-row items-center justify-center transparent">
        <img
          // width={0}
          // height={0}
          // sizes="100vw"
          alt="Timeline icon"
          src="/timeline.jpeg"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            objectPosition: "top right",
          }}
        />
      </div>
    </div>
  );
};

export default PorfolioHeader;
