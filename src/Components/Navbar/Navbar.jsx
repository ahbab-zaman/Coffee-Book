import React from "react";
import { Link, NavLink } from "react-router-dom";
import { RiMenu2Fill } from "react-icons/ri";
const Navbar = () => {
  return (
    <div>
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <RiMenu2Fill className="text-xl"></RiMenu2Fill>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/coffees">Coffees</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>
            </ul>
          </div>
          <div className="text-2xl font-semibold">Coffee_Book</div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul
            className="menu menu-horizontal space-x-4
           px-1"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/coffees">Coffees</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
