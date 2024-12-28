import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <section className="bg-backgroundColor backdrop-blur-[10px] shadow-navbar w-full h-[100px] flex justify-between items-center px-[150px] text-center fixed top-0 left-0 z-[30]">
      {/* logo  */}
      <div>
        <Link
          to="/"
          className="text-textWhiteColor font-extrabold no-underline text-4xl	hover:text-textThemeColor"
        >
          SARTHAK
        </Link>
      </div>
      {/* list  */}
      <div className="flex justify-between items-center">
        <ul className="flex justify-center gap-8 items-center m-auto text-center">
          <li>
            <Link
              className="no-underline	text-textWhiteColor text-xl font-medium hover:text-textThemeColor"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <a
              href="#projects"
              className="no-underline	text-textWhiteColor text-xl font-medium hover:text-textThemeColor"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="no-underline	text-textWhiteColor text-xl font-medium hover:text-textThemeColor"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="no-underline	text-textWhiteColor text-xl font-medium hover:text-textThemeColor"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contacts"
              className="no-underline	text-textWhiteColor text-xl font-medium hover:text-textThemeColor"
            >
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Navbar;
