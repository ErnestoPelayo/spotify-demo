import spotify from "/img/spotify-white-icon.png";
import {
  SearchIcon,
  HomeFillIcon,
  ListUnorderedIcon,
  PlusIcon,
} from "@primer/octicons-react";

import { NavLink } from "react-router-dom";
import TermsConditions from "./TermsConditions";
import Playlist from "./Playlist";

const SlideBar = () => {
  return (
    <div className="h-screen w-96 p-2 sticky top-0">
      <div className="bg-black-1001 p-6 rounded-lg space-y-5 ">
        <div className="flex ">
          <img src={spotify} className="w-6 h-6 mr-1" />
          <p className="text-white text-xl">Spotify</p>
        </div>
        <div className="flex text-neutral-400 hover:text-white">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "uppercase text-white font-bold"
                : "uppercase text-neutral-400 font-bold"
            }
            to={"/"}
          >
            <HomeFillIcon className=" mr-7" size={28} />
            <button className="mt-1 font-bold hover:underline">Home</button>
          </NavLink>
        </div>
        <div className="flex text-neutral-400 hover:text-white">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "uppercase text-white font-bold"
                : "uppercase text-neutral-400 font-bold"
            }
            to={"/search"}
          >
            <SearchIcon size={28} className=" mr-7" />
            <button className="mt-1 font-bold hover:underline">Search</button>
          </NavLink>
        </div>
      </div>
      <div className="bg-black-1001">
        <div className="p-6 rounded-lg space-y-5 mt-2">
          <div className="w-full flex text-neutral-400 hover:text-white">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "uppercase text-white font-bold"
                  : "uppercase text-neutral-400 font-bold"
              }
              to={"/library"}
            >
              <ListUnorderedIcon className="mr-7" size={28} />
              <button className="mt-1 font-bold hover:underline">
                Your Library
              </button>
            </NavLink>
            <PlusIcon className="mt-1 ml-auto" size={28} />
          </div>
        </div>

        <div className="h-20 overflow-auto custom-scrollbar border border-gray-300 ">
          <Playlist />
        </div>
        <div className="">
          <TermsConditions />
        </div>
      </div>
    </div>
  );
};

export default SlideBar;
