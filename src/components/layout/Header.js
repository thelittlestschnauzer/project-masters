import React from "react";
import { FaRegPlusSquare } from "react-icons/fa";
import { FaCoffee } from "react-icons/fa";
import { AiOutlineSchedule } from "react-icons/ai";
import { FiAnchor } from "react-icons/fi";


export const Header = () => {
  return(
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <span><FiAnchor /></span>
        </div>
        <div className="settings">
          <ul>
            <li data-testid="quick-add-task-action" className="settings__add">
              <span><FaRegPlusSquare /></span>
            </li>
            <li data-testid="dark-mode-action" className="settings__add settings__darkmode">
              <span><FaCoffee /></span>
            </li>
            {/* <li>
              <span><AiOutlineSchedule /></span>
            </li> */}
          </ul>
        </div>
      </nav>
    </header>
  )
}