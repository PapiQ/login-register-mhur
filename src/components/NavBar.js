import React from "react";
import logo2 from "../logo2.png";
import avatar from "../avatar.jpg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/">
          <img className="logo-small" src={logo2} />
        </a>
      </div>
      <div className="navbar-right">
        <ul className="nav-links">
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/courses">Courses</a>
          </li>
          <li>
            <a href="/careers">Careers</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <div className="profile">
              <a href="/">
                <img className="profile-picture" src={avatar} />
              </a>
              {/* <div className="name-center">Lina &#x25BF;</div> */}
              <div className="name-center">
                Lina <div class="arrow-down"></div>
              </div>

              {/* <div className="name-center">Lina &#11167;</div> */}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
