import { FC } from "react";
import Image from "next/image";
import { Button } from "./ui/Button";
const PorfolioHeader: FC = () => {
  return (
    <div className="w-full h-[250px] bg-gradient-to-br from-purple-300 to-indigo-600 overflow-hidden shadow-lg">
      <div className="container p-0 bg-transparent flex flex-row items-center justify-center transparent">
        <img
          // width={0}
          // height={0}
          // sizes="100vw"
          alt="Timeline icon"
          src="/timeline_icon.png"
          style={{ objectFit: "cover", width: "100%" }}
        />
      </div>
    </div>
  );
};

export default PorfolioHeader;
