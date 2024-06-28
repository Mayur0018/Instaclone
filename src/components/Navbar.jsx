import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { logout } from "../features/authSlice";
import img1 from "../assets/images/loginlogo.png";
import {
  faHome,
  faSearch,
  faCompass,
  faEnvelope,
  faBell,
  faPlus,
  faUser,
  faBars,
  faTimes,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="container flex flex-col mx-auto bg-white">
      <header className="w-full bg-white border-b border-b-neutral-200 fixed z-40">
        <div className="flex justify-between items-center px-4 py-4">
          <img alt="Logo" src={img1} className="inline w-[150px] mb-1" />
          <button onClick={toggleSidebar} className="text-dark md:hidden">
            <FontAwesomeIcon
              icon={isOpen ? faTimes : faBars}
              className="w-6 h-6"
            />
          </button>
        </div>
      </header>

      {/* Sidebar */}
      <aside
        className={`group/sidebar flex flex-col shrink-0 lg:w-[300px] w-[250px] transition-all duration-300 ease-in-out fixed z-40 inset-y-0 left-0 bg-white border-r border-r-dashed border-r-neutral-200 sidenav loopple-fixed-start ${
          isOpen
            ? "ml-0"
            : "-ml-[250px] md:ml-0 md:static md:translate-x-0"
        }`}
        id="sidenav-main"
      >
        <div className="flex justify-between items-center px-8 h-[96px] hidden md:flex">
          <a
            href="https://www.loopple.com"
            className="transition-colors duration-200 ease-in-out"
          >
            <img alt="Logo" src={img1} className="inline w-[200px]" />
          </a>
          <button onClick={toggleSidebar} className="text-dark md:hidden">
            <FontAwesomeIcon
              icon={isOpen ? faTimes : faBars}
              className="w-6 h-6"
            />
          </button>
        </div>

        <div className="hidden border-b border-dashed lg:block dark:border-neutral-700/70 border-neutral-200"></div>

        {/* Sidebar Links */}
        <div className="relative pl-3 my-5 overflow-y-scroll">
          <div className="flex flex-col w-full font-medium">
            <div>
              <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                <Link
                  to="/"
                  onClick={closeSidebar}
                  className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark"
                >
                  <FontAwesomeIcon icon={faHome} className="mr-2" /> Home
                </Link>
              </span>
            </div>
            <div>
              <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                <Link
                  to="/search"
                  onClick={closeSidebar}
                  className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark"
                >
                  <FontAwesomeIcon icon={faSearch} className="mr-2" /> Search
                </Link>
              </span>
            </div>
            <div>
              <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                <Link
                  to="/explore"
                  onClick={closeSidebar}
                  className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark"
                >
                  <FontAwesomeIcon icon={faCompass} className="mr-2" /> Explore
                </Link>
              </span>
            </div>
            <div>
              <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                <Link
                  to="/messages"
                  onClick={closeSidebar}
                  className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Messages
                </Link>
              </span>
            </div>
            <div>
              <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                <Link
                  to="/notifications"
                  onClick={closeSidebar}
                  className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark"
                >
                  <FontAwesomeIcon icon={faBell} className="mr-2" /> Notifications
                </Link>
              </span>
            </div>
            <div>
              <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                <Link
                  to="/create"
                  onClick={closeSidebar}
                  className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark"
                >
                  <FontAwesomeIcon icon={faPlus} className="mr-2" /> Create
                </Link>
              </span>
            </div>
            <div>
              <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                <Link
                  to="/profile"
                  onClick={closeSidebar}
                  className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark"
                >
                  <FontAwesomeIcon icon={faUser} className="mr-2" /> Profile
                </Link>
              </span>
            </div>
            {/* Logout Link */}
            <div>
              <span
                onClick={handleLogout}
                className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem] hover:bg-neutral-100 dark:hover:bg-neutral-700"
              >
                <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" /> Logout
              </span>
            </div>
          </div>
        </div>
      </aside>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 z-30"
          onClick={closeSidebar}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
