import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="following">Following</Link>
          </li>
          <li>
            <Link to="user">Setting</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
