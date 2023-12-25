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
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-300/10 rounded-b-2xl">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-pink-500 to-[#f1580c] rounded-md filter blur-3xl opacity-50 -z-50"></div>
        <Image
          src="/logo2.png"
          alt="Taskhub Logo"
          width={360}
          height={120}
          className="w-56 md:w-64 pb-10 md:pb-0 object-contain"
        />

        <div className="flex flex-1 items-center justify-end space-x-5 w-full">
          <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
              className="flex-1 outline-none p-2"
            />
            <button hidden type="submit">
              Search
            </button>
          </form>

          <Avatar
            //githubHandle="KeanArkn"
            name="Kaan Arkan"
            color="#f1580c"
            round
          />
        </div>
      </div>
      <div className="flex items-center justify-center px-5 py-2 md:py-5">
        <p className="flex items-center text-md font-normal p-5 shadow-xl rounded-xl w-fit bg-white italic max-w-3xl text-[#f1580c]">
          <UserCircleIcon className="inline-block h-10 w-10 mr-1 text-[#f1580c]" />
          Task summarizes
        </p>
      </div>
    </header>
  );
};

export default Header;
