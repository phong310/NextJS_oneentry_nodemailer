import React from "react";
import { menuItemType } from "../ui/interface";
import Link from "next/link";
import Cart from "../ShoppingCart/Cart";

interface meunProps {
  links: menuItemType[];
}

export const DesktopMenu: React.FC<meunProps> = ({ links }) => {
  return (
    <>
      <ul className="col-start-1 flex items-center gap-6 md:text-[1.25rem]">
        {links.map((link: menuItemType) => {
          return (
            <Link key={link.id} href={link.url}>
              {link.title}
            </Link>
          );
        })}
      </ul>
      <Link
        href="/"
        className="object-fit justify-self-center col-start-2 md:w-36"
      >
        <img src="/eao_logo.svg" alt="logo" className="" />
      </Link>
      <Cart/>
    </>
  );
};

export const MobileMenu: React.FC<meunProps> = ({ links }) => {
  return <div>mobile Menu</div>;
};
