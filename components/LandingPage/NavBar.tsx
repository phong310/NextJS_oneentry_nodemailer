import React from 'react'
import { menuItemType } from '../ui/interface';
import { DesktopMenu } from '../Menu/Menu';

const NavBar = () => {
    const navLinks: menuItemType[] = [
      {
        id: "link1",
        title: "Man",
        url: "/mens-clothing",
      },
      {
        id: "link2",
        title: "Woman",
        url: "/womens-clothing",
      },
      {
        id: "link3",
        title: "Featured",
        url: "/featured",
      },
    ];
  return (
    <>
      {/* Desktop Menu   */}
      <nav className='hidden md:grid grid-cols-3 gap-4 items-center'>
        <DesktopMenu links={navLinks}/>
      </nav>
    </>
  )
}

export default NavBar