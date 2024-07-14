import { FC, ReactNode } from "react";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
        />
      </head>

      <body className="bg-gray-100 text-gray-900 w-dvw">
        <Navbar />
        <div className="mx-auto">{children}</div>
      </body>
    </html>
  );
};

export default Layout;
