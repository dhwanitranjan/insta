import React from "react";
import {
  AiOutlineInstagram,
  AiFillHome,
  AiOutlineSearch,
  AiOutlineCompass,
  AiOutlineHeart,
  AiOutlineMenu,
} from "react-icons/ai";
import { BiSolidMoviePlay } from "react-icons/bi";
import { BsMessenger, BsPlusSquare } from "react-icons/bs";
const Header = () => {
  const commonIconStyle = "";
  const navs = [
    {
      id: 1,
      title: "Instagram",
      component: <AiOutlineInstagram size={32} />,
    },
    {
      id: 2,
      title: "Home",
      component: <AiFillHome size={28} className="border-r-md" />,
    },
    {
      id: 3,
      title: "Search",
      component: <AiOutlineSearch size={28} />,
    },
    {
      id: 4,
      title: "Explore",
      component: <AiOutlineCompass size={28} />,
    },
    {
      id: 5,
      title: "Reels",
      component: <BiSolidMoviePlay size={28} />,
    },
    {
      id: 6,
      title: "Messages",
      component: <BsMessenger size={28} />,
    },
    {
      id: 7,
      title: "Notifications",
      component: <AiOutlineHeart size={28} />,
    },
    {
      id: 8,
      title: "Create",
      component: <BsPlusSquare size={28} />,
    },
    {
      id: 9,
      title: "Profile",
      component: "Image",
    },
    {
      id: 10,
      title: "More",
      component: <AiOutlineMenu size={30} />,
    },
  ];
  return (
    <div className="h-screen left-0 bottom-0 w-20 xl:w-64 border-r-white border-r-2">
      <ul className="flex flex-col h-screen w-64 justify-between items-center xl:items-start xl:ms-5">
        {navs.map((item) => (
          <li
            key={item.id}
            className="group flex flex-row first:my-6 last:mb-6 p-1 hover:bg-gray-500 rounded-lg duration-300 cursor-pointer"
          >
            <span className="group-hover:scale-110 duration-300">
              {item.component}
            </span>
            <span className="hidden xl:inline-flex lg:ms-6">{item.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
