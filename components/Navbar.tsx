"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { FC, useEffect, useState } from "react";
import { Button } from "./ui/Button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
const Links = [
  {
    href: "/",
    name: "About me",
    id: "about-me",
  },
  {
    href: "#projects",
    name: "Projects",
    id: "projects",
  },
  {
    href: "#experience",
    name: "Experience",
    id: "experience",
  },
  {
    href: "#skills",
    name: "Skills",
    id: "skills",
  },
];
const Navbar: FC = () => {
  const pathname = usePathname();

  const [activeSection, setActiveSection] = useState(Links[0].href);
  // const isActive = (path: string) => pathname === path;

  const handleScroll = () => {
    let lastActiveElement = null;
    Links.forEach((link) => {
      const element = document.getElementById(link.id);
      let elememtOffset = element?.offsetTop;
      const scrollPosition = window.scrollY;
      if (elememtOffset != null && scrollPosition > elememtOffset) {
        lastActiveElement = link.href;
      }
    });
    if (lastActiveElement) setActiveSection(lastActiveElement);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <nav className="bg-white container sticky top-0 shadow-md py-4 px-6 z-10">
      <div className="flex flex-row justify-between">
        <div className="hidden md:flex flex-row gap-4 items-center">
          {Links.map((item, index) => (
            <NextLink
              key={index}
              href={item.href}
              className={cn(
                "text-sm font-semibold p-2 rounded-lg",
                `${
                  activeSection == item.href
                    ? "bg-purple-50 text-purple-600"
                    : ""
                }`
              )}
              passHref
              onClick={() => setActiveSection(item.href)}
            >
              {item.name}
            </NextLink>
          ))}
        </div>
        <div className="flex md:hidden flex-row gap-4 items-center">
          <Sheet
            open={isDrawerOpen}
            onOpenChange={() => setIsDrawerOpen((val) => !val)}
          >
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Image src="/hamburger.png" alt="menu" width={20} height={20} />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[200px] sm:w-[200px]" side={"left"}>
              <div className="flex flex-col">
                {Links.map((item, index) => (
                  <NextLink
                    key={index}
                    href={item.href}
                    className={cn(
                      "text-sm font-semibold p-2 rounded-lg",
                      `${
                        activeSection == item.href
                          ? "bg-purple-50 text-purple-600"
                          : ""
                      }`
                    )}
                    passHref
                    onClick={() => {
                      setActiveSection(item.href);
                      setIsDrawerOpen(false);
                    }}
                  >
                    {item.name}
                  </NextLink>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="flex items-center space-x-4">
          <Button
            variant={"ghost"}
            size={"icon"}
            className="text-gray-700 hover:text-primary"
          >
            <NextLink href={"https://www.linkedin.com/in/dhanendraverma/"}>
              <img src="social-icons/linkedin.png" />
            </NextLink>
          </Button>
          <Button
            variant={"ghost"}
            size={"icon"}
            className="text-gray-700 hover:text-primary"
          >
            <NextLink href={"https://github.com/dhanendraverma"}>
              <img src="social-icons/github.png" />
            </NextLink>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
