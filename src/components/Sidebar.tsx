import React from "react";
import { NavLink } from "react-router-dom";
import './sidebar.css'
import{ FaAngellist, FaBox, FaCube, FaDashcube, FaMicrosoft, FaPlay, FaPlus, FaRegWindowMaximize, FaSquare, FaUserMinus } from 'react-icons/fa'
import { FaPersonRunning, FaSpaghettiMonsterFlying, FaUser } from "react-icons/fa6";

//components
const Sidebar = (e: any) => {
  return (
    <>
      <div className="navbar">
        <div className="flex">

        <div className="logo">
            <span>your Name</span>
        </div>
        <div className="links">
          <ul>
            <li className="waves-effect waves-light  "><FaPlus/><NavLink to={"/createusers"}>Create Users</NavLink> </li>
            <li className="waves-effect waves-light  "><FaMicrosoft/> <NavLink to={"/dashboard"}>Dashboard</NavLink> </li>
            <li className="waves-effect waves-light  "><FaPersonRunning/> <NavLink to={"/checkin"}>Check In</NavLink></li>
            <li className="waves-effect waves-light  "><FaSpaghettiMonsterFlying/> <NavLink to={"/checkedin"}>Checked In</NavLink></li>
            <li className="waves-effect waves-light "><FaUser/> <NavLink to={"/activeusers"}>Active Users</NavLink></li>
            <li className="waves-effect waves-light "><FaUserMinus/> <NavLink to={"/inactiveusers"}>Inactive users</NavLink></li>
            <li className="waves-effect waves-light "><FaPlay/> <NavLink to={"/past"}>past</NavLink></li>
          </ul>
        </div>
        </div>

        <div className="copyright">
          Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet.

        </div>
      </div>
    </>
  );
};

export default Sidebar;
