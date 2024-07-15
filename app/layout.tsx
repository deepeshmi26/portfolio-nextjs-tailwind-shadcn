import { FC, ReactNode } from "react";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { Montserrat } from "./fonts";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <html lang="en" className={`${Montserrat.variable}`}>
      <body className="bg-gray-100 text-gray-900 w-dvw">
        <Navbar />
        <div className="mx-auto">{children}</div>
      </body>
    </html>
  );
};

export default Layout;
