"use client";

import React from "react";
import Image from "next/image";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/20/solid";
import Avatar, { InstagramSource, createAvatarComponent } from "react-avatar";
import { useBoardStore } from "@/store/BoardStore";

const Header = () => {
  const [searchString, setSearchString] = useBoardStore((state) => [
    state.searchString,
    state.setSearchString,
  ]);

  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-200/10 rounded-b-2xl">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-pink-500 to-[#f1580c] rounded-md filter blur-3xl opacity-50 -z-50"></div>
        <Image
          src="/logo2.png"
          alt="Taskhub Logo"
          width={360}
          height={120}
          className="w-56 md:w-64 pb-10 md:pb-0 object-contain"
        />

        <div className="flex flex-1 items-center justify-center lg:justify-end w-full">
          <p className="flex items-center text-md font-normal p-2 w-fit bg-transparent italic max-w-xl text-white">
            Hello KA welcome to the TaskHub. Here are all your tasks and their
            latest status. Keep up the progress and have a productive day!
          </p>
          <Avatar
            //githubHandle="KeanArkn"
            name="Kaan Arkan"
            color="white"
            fgColor="#f1580c"
            round
            size="60"
            textSizeRatio={3}
            className="animate-bounce inline-block mr-1 opacity-80"
          />
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center md:justify-end pb-4 px-2 md:px-10 lg:px-[88px] w-full">
        <form className="flex items-center space-x-2 md:space-x-5 bg-white rounded-md py-2 shadow-md w-1/2 max-w-xl">
          <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
            className="flex w-full outline-none p-2"
          />
          <button hidden type="submit">
            Search
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
