import React, { useState } from 'react';
import { useRouter } from 'next/router';

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const NavLink = ({ href, children }) => {
    const isActive = router.pathname === href;

    const defaultClasses =
      'font-semibold transition duration-300 ease-in-out px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300';

    const activeClasses = 'bg-[#00715D] text-white';
    const hoverClasses = 'hover:bg-green-900 hover:text-white';

    const classes = `${defaultClasses} ${isActive ? activeClasses : hoverClasses}`;

    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  };
  return (
    <div className="bg-white py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <a href="/">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ecc3157389c2f02314b8a1d2d0c6e6c6428c8b5dc40ba1224cf94ef1ef55b7ad?" 
          className="aspect-[4.05] object-contain object-center w-[178px] overflow-hidden self-center shrink-0 max-w-full my-auto"
          alt="Logo"
        />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-5">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/donation">Donation</NavLink>
          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="/pages">Pages</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>
        
        {/* Desktop User Section */}
        <div className="hidden md:flex items-center space-x-2">
        <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 px-3 py-1 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f6edf707bb5329797836afac6842aad60ac1708dee1ee4a2cf6ec54b2a79c37?" 
            className="aspect-square object-contain object-center w-[40px] justify-center items-center overflow-hidden shrink-0 max-w-full"
            alt="Search icon"
          />
          <button className="bg-emerald-700 text-white px-4 py-2 rounded-full">
            <a href="/login">Log in</a>
          </button>
        </div>

        {/* Mobile Navigation (Hamburger menu) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-neutral-950 px-5 text-base font-semibold leading-6 capitalize focus:outline-none"
          >
            Menu
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-white">
            <nav className="flex flex-col items-center space-y-4 pt-16">
              <NavLinkMobile href="/" active>
                Home
              </NavLinkMobile>
              <NavLinkMobile href="/about">About</NavLinkMobile>
              <NavLinkMobile href="/donation">Donation</NavLinkMobile>
              <NavLinkMobile href="/blog">Blog</NavLinkMobile>
              <NavLinkMobile href="/pages">Pages</NavLinkMobile>
              <NavLinkMobile href="/contact">Contact</NavLinkMobile>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}

// Custom NavLink component for consistent styling
function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="text-neutral-950 text-base font-semibold leading-6 capitalize hover:text-emerald-700"
    >
      {children}
    </a>
  );
}

// Custom NavLinkMobile component for mobile styling
function NavLinkMobile({ href, children, active }) {
  const activeClassName = active ? 'text-emerald-700' : '';
  return (
    <a
      href={href}
      className={`text-neutral-950 text-base font-semibold leading-6 capitalize ${activeClassName}`}
    >
      {children}
    </a>
  );
}

export default Header;
