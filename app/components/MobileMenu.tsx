import { Menu } from "lucide-react";
import { useState } from "react";

import { Link } from "@remix-run/react";
import { Topbar } from "./Topbar";
import { Logo } from "./Logo";
import { MenuLinks } from "./MenuLinks";
import { Search } from "./Search";
import { MenuIcons } from "./MenuIcons";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {" "}
      <div className="flex sm:hidden justify-between min-w-[300px] m-auto mt-5">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center rounded-md p-2 transition duration-300"
        >
          <Menu />
        </button>
        <Logo />
      </div>
      <div
        className={`sm:hidden w-fit p-6 border rounded-md min-w-[300px] transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex-col w-fit">
          <Logo className={"mb-4"} />
          <MenuLinks className={"flex-col space-y-2"} />
          <Search className={"flex w-fit mt-4"} />
          <MenuIcons className={"mt-4"} />
          <Topbar className={"mt-4"} />
        </div>
      </div>
    </>
  );
};
