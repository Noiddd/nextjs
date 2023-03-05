import React from "react";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";

export default function Header() {
  return (
    <div className="flex">
      <div>
        <MenuItem title="Home" address="/" Icon={AiFillHome} />
      </div>
      <div c>
        <MenuItem title="About" address="/about" Icon={BsFillInfoCircleFill} />
      </div>

      <div>
        <h2 className="text-2xl">
          <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg">
            Movie
          </span>
          <span className="text-xl hidden sm:inline">App</span>
        </h2>
      </div>
    </div>
  );
}
