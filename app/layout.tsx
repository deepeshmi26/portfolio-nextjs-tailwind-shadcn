import { FC, ReactNode } from "react";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { Montserrat } from "./fonts";
import PorfolioHeader from "@/components/PortfolioHeader";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <html lang="en" className={`${Montserrat.variable}`}>
      <body className="bg-gray-100 text-gray-900 w-dvw ">
        <div
          className="bg-repeat-x"
          style={{ backgroundImage: 'url("/background.avif")' }}
        >
          <Navbar />
          <PorfolioHeader />
        </div>
        <div className="mx-auto bg-fixed">{children}</div>
      </body>
    </html>
  );
};

export default Layout;
