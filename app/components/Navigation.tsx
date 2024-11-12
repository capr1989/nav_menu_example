import { Link } from "@remix-run/react";
import { Topbar } from "./Topbar";
import { Logo } from "./Logo";
import { MenuLinks } from "./MenuLinks";
import { Search } from "./Search";
import { MenuIcons } from "./MenuIcons";
import { MobileMenu } from "./MobileMenu";

export function Navigation() {
  return (
    <nav className="flex-col sm:mx-40 mt-5 mx-10">
      <div className="hidden sm:flex flex-col">
        <Topbar />
        <div className="flex mt-3 justify-between">
          <Logo />
          <MenuLinks className={"flex space-x-4"} />
          <Search className={"flex w-96 shrink space-x-2 m-auto mr-3"} />
          <MenuIcons />
        </div>
      </div>
      <MobileMenu />
    </nav>
  );
}
