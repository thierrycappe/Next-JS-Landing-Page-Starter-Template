import Link from 'next/link';
import type { ReactNode } from 'react';
import { useState } from 'react';

import { AppConfig } from '@/utils/AppConfig';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative flex w-full flex-wrap items-center justify-between">
      <div className="flex items-center">
        <button
          className="absolute left-0 top-0 z-20 p-2 lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {/* Hamburger Icon */}
          <svg
            className="h-6 w-6 rounded-md text-gray-800 hover:bg-gray-600 hover:text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Logo */}
        <div className="hidden lg:ml-12 lg:flex">
          <Link href="/">{props.logo}</Link>
        </div>
        {/* Site Name */}
        <span className="ml-2 text-2xl lg:hidden">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{AppConfig.site_name}
        </span>
      </div>
      <nav
        className={`${isMenuOpen ? 'flex' : 'hidden'} grow justify-end lg:flex`}
      >
        <ul className="navbar items-right flex flex-col text-xl font-medium text-gray-800 lg:flex-row lg:justify-end">
          {props.children}
        </ul>
      </nav>
      <style jsx>
        {`
          .navbar :global(li:not(:first-child)) {
            @apply mt-0;
          }

          .navbar :global(li:not(:last-child)) {
            @apply mr-5 lg:mr-5;
          }
        `}
      </style>
    </div>
  );
};

export { NavbarTwoColumns };
