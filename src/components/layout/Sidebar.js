import React from "react";
import { FaRegCalendarAlt, FaInbox, FaCalendarDay, FaChevronDown } from "react-icons/fa";

export const Sidebar = () => {
  return(
    <div className="sidebar" data-testid="sidebar">
      <ul className="sidebar__generic">
        <li data-testid="inbox" className="inbox">
          <span><FaInbox /></span>
          <span>Inbox</span>
        </li>
        <li data-testid="today" className="today">
          <span><FaCalendarDay /></span>
          <span>Today</span>
        </li>
        <li data-testid="next_7" className="next_7">
          <span><FaRegCalendarAlt /></span>
          <span>Next 7 Days</span>
        </li>
      </ul>

      <div className="sidebar__middle">
        <span><FaChevronDown /></span>
        <h2>Projects</h2>
      </div>
      <ul className="sidebar__projects">
        <li>Project1</li>
      </ul>
      Project Component will be added in this area
    </div>
  );
}