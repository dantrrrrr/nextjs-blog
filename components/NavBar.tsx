import Link from "next/link";
import React from "react";
import { buttonVariants } from "@/components/ui/Button";
import { ModeToggle } from "@/components//ThemeToggle";
const NavBar = () => {
  return (
    <nav className="h-16 bg-background/50 sticky top-0 border-b px-8 backdrop-blur flex items-center ">
      <div className="font-bold text-2xl">DNTR</div>
      <ul className="hidden md:flex w-full justify-end space-x-6 items-center">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li className="buttons space-x-4">
          <Link
            className={buttonVariants({ variant: "outline" })}
            href={"/login"}
          >
            Login{" "}
          </Link>
          <Link
            className={buttonVariants({ variant: "outline" })}
            href={"/signup"}
          >
            Sign Up{" "}
          </Link>
        </li>
        <li>
          <ModeToggle />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
