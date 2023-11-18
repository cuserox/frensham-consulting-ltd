import React from "react";
import { Link } from "gatsby";

import Logo from "../images/logos/logo-f.png";
import Button from "./button";

const Header = () => {
  const navigation = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
  ];
  return (
    <header>
      <div className="container mx-auto">
        <div className="flex py-5 justify-between items-center">
          <div className="flex flex-row gap-8 items-center">
            <Link to="/">
              <img className="h-8 w-auto" src={Logo} alt="Logo" />
            </Link>
          </div>
          <div className="flex flex-row gap-6">
            <div className="flex flex-row md:gap-4 gap-1 items-center">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-body-sm font-medium text-neutral-700 hover:text-primary-600 md:px-4 px-1"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <Button className={"py-1"} label="CONTACT" link="#" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
