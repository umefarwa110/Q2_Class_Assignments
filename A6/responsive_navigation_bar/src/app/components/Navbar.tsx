"use client"
import { useState } from "react";

export default function Navbar() {

  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const show_sidebar = () => {
    setIsSidebarVisible(true); //state set kia show sidebar ko true karnay ka lia
  };

  const hide_sidebar = () => {
    setIsSidebarVisible(false); //state set kia hide sidebar ko false karnay ka lia
  };


  return (
    <div>
      <nav>
        <ul className={`side_bar ${isSidebarVisible ? 'visible' : ''}`}>
          <li onClick={hide_sidebar}><a href="#"><svg xmlns="http://www.w3.org/2000/svg"
            height="28px"
            viewBox="0 -960 960 960"
            width="28px"
            fill="#ffff">
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
          </a>
          </li>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Feedback</a></li>
        </ul>

        <ul>
          <li><a href="#">
            <img
              src="/logo2.png"
              alt="Logo"
              width="60"
            />
          </a></li>
          <li className="hide_on_mobile"><a href="#">Home</a></li>
          <li className="hide_on_mobile"><a href="#">About</a></li>
          <li className="hide_on_mobile"><a href="#">Services</a></li>
          <li className="hide_on_mobile"><a href="#">Contact</a></li>
          <li className="hide_on_mobile"><a href="#">Feedback</a></li>
          <li className="burger_menu_button" onClick={show_sidebar}><a href="#"><svg xmlns="http://www.w3.org/2000/svg"
            height="28px"
            viewBox="0 -960 960 960"
            width="28px"
            fill="#ffff">
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
          </a>
          </li>
        </ul>
      </nav>

    </div>
  )
}