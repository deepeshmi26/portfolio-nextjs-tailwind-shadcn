import localFont from "next/font/local";
export const Montserrat = localFont({
  src: [
    {
      path: "../assets/fonts/Montserrat/Montserrat-VariableFont_wght.ttf",
      // weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Montserrat/Montserrat-Italic-VariableFont_wght.ttf",
      // weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-montseraat",
});
