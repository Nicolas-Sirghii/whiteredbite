import { useState } from "react";
import { HeaderOptions } from "./header_options/header_options";
import "./header.css";

export function Header() {
    const [eye, setEye] = useState(true);
  return (
    <header className="header">
        <div className="logo-wrapper">
          <img
           src="/clean_logo.png" alt="Header Logo" className="logo" />
        </div>
        <HeaderOptions />

        
        
    </header>
  );
}