import { useState } from "react";
import { HeaderOptions } from "./header_options/header_options";
import {UserAvatar} from "./user_avatar";
import "./header.css";

export function Header() {
    const [eye, setEye] = useState(true);
  return (
    <header className="header">
        <div className="logo-wrapper">
            <img
            style={{ left: eye ? "68.4%" : "79.5%" }}
             src="/left-eye.png" className="left-eye" alt="Left Eye" />
            <img
             style={{ left: eye ? "79.5%" : "68.4%"  }}
             src="/right-eye.png" className="right-eye" alt="Right Eye" />  
          <img
          onClick={() => setEye(!eye)}
           src="/header_logo_small.png" alt="Header Logo" className="logo" />
        </div>
        <HeaderOptions />

        <UserAvatar />
        
    </header>
  );
}