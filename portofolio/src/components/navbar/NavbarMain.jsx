import React from 'react';
import NavbarLinks from './NavbarLinks';
import NavbarBtn from './NavbarBtn';
import NavbarLogo from './NavbarLogo';
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';

const NavbarMain = () => {
  const [menuOpen,setMenuOpen]=useState(false);
  const toggleMenu = ()=>{
    setMenuOpen(menuOpen);
  };
  return (
  <nav className='max-w-[1300px] w-full fixed left-1/2 -translate-x-1/2 top-2 z-20 flex gap-4 px-4'>
    <div className='flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center p-6 rounded-r-full rounded-l-full border-[0.5px] border-orange'>
      <NavbarLogo />
      <div className={`${menuOpen ? 'sm:block' : 'sm:hidden'} lg:block`}>
        <NavbarLinks />
      </div>
      <NavbarBtn />
    </div>
    <div className='flex lg:hidden sm:block p-6 bg-black items-center justify-center rounded-full border-[0.5px] border-orange'>
      <button 
        className='text-2xl p-3 border border-orange rounded-full text-white' 
        onClick={toggleMenu}>
        <GiHamburgerMenu/>
      </button>
    </div>
  </nav>
  );
};

export default NavbarMain;
