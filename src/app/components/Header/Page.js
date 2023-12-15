"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import { BeakerIcon, MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import ThemeButton from "../ThemeButton/Page";

export default function Header() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);


  return (
    <>
      <div className="p-5">
        <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
          <div className="">
            <img
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
              alt="user-image"
              className="h-10 rounded-full cursor-pointer"
            />
          </div>

          <div className="flex flex-1 justify-end md:justify-center">
            <div className="pointer-events-auto md:hidden" data-headlessui-state="">
              <button
                className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
                type="button"
                aria-expanded="false"
                data-headlessui-state=""
                id="headlessui-popover-button-:R2miqla:"
              >
                Menu
                Icon
              </button>
            </div>
            {/* <div style="position:fixed;top:1px;left:1px;width:1px;height:0;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0;display:none"></div> */}
            <nav className="pointer-events-auto hidden md:block">
              <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                
                <li>
                  <a
                    className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                    href="/projects"
                  >
                    Projects
                  </a>
                </li>
                
              </ul>
            </nav>
          </div>
          
          <div className="flex space-x-4 items-center">
            {mounted && <ThemeButton />}
          </div>
        </div>
      </div>
    </>
  );
}
