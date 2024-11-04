import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

function Header() {
  const [themeMode, setThemeMode] = useState('dark');

  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light');
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);

  const onChangeTheme = () => {
    setThemeMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleScrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <main className="flex max-w-full justify-between overflow-hidden bg-neutral-100 p-6 font-SF dark:bg-neutral-950">
      <section className="flex items-center justify-start">
        <img src="/icons/Camera.svg" alt="Just Roy" className="size-16" />
      </section>
      <nav className="flex items-center justify-end gap-8 text-lg text-black dark:text-white">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `duration-200 ${isActive ? 'text-orange-400' : 'text-inherit'} hover:text-orange-700 lg:border-0 lg:p-0 lg:hover:bg-transparent`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/AboutMe"
          className={({ isActive }) =>
            `duration-200 ${isActive ? 'text-orange-400' : 'text-inherit'} hover:text-orange-700 lg:border-0 lg:p-0 lg:hover:bg-transparent`
          }
        >
          About
        </NavLink>

        <button
          onClick={handleScrollToWork}
          className="text-inherit hover:text-orange-700"
        >
          Work
        </button>

        <NavLink
          to="/Gallery"
          className={({ isActive }) =>
            `duration-200 ${isActive ? 'text-orange-400' : 'text-inherit'} hover:text-orange-700 lg:border-0 lg:p-0 lg:hover:bg-transparent`
          }
        >
          Gallery
        </NavLink>

        <NavLink
          to="/ContactMe"
          className={({ isActive }) =>
            `duration-200 ${isActive ? 'text-orange-400' : 'text-inherit'} hover:text-orange-700 lg:border-0 lg:p-0 lg:hover:bg-transparent`
          }
        >
          Contact
        </NavLink>

        <label className="relative inline-flex cursor-pointer items-center">
          <button onClick={onChangeTheme}>
            {themeMode === 'dark' ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
            )}
          </button>
        </label>
      </nav>
    </main>
  );
}

export default Header;
