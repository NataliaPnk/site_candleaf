import React from "react";
import s from "./index.module.css";
import leftLogo from './media/logo_left_icon.jpg'
import rightIcons from './media/right_icons.jpg'

export default function Header() {
  return (
    <div className={s.nav_menu_container}>

    <div className={s.nav_menu_all_wrapper}>
      
      <img className={s.left_logo} src={leftLogo}  alt="Left Icon-logo" />
      

      <div className={s.nav_menu_inner_wrapper}>
        <div className={s.nav_menu}>
          <p>Home</p>
          <p>About</p>
          <p>Contact us</p>
        </div>
      </div>

          <img className={s.right_icons} src={rightIcons} alt="Right Icon" />
      
          </div>

    </div>
  );
}
