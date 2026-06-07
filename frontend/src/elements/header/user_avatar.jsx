import { useState } from "react";
import "./user_avatar.css";

const items = [
  {
    name: "Login",
    onClick: () => console.log("Login"),
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M13 2H17C19.76 2 22 4.24 22 7V17C22 19.76 19.76 22 17 22H13"
          stroke="currentColor" strokeWidth="2"/>
        <path d="M3 12H14" stroke="currentColor" strokeWidth="2"/>
        <path d="M10 8L14 12L10 16" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },

  {
    name: "Profile",
    onClick: () => console.log("Profile"),
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M5 20c1.5-4 12.5-4 14 0" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },

  {
    name: "Settings",
    onClick: () => console.log("Settings"),
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 2V6M12 18V22M2 12H6M18 12H22"
          stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },

  {
    name: "Logout",
    onClick: () => console.log("Logout"),
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M13 2H17C19.76 2 22 4.24 22 7V17C22 19.76 19.76 22 17 22H13"
          stroke="currentColor" strokeWidth="2"/>
        <path d="M14 12H3" stroke="currentColor" strokeWidth="2"/>
        <path d="M6 8L3 12L6 16" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
];

export function UserAvatar() {
  const [open, setOpen] = useState(false);

  const handleClick = (item) => {
    item.onClick?.();
    setOpen(false); // tuck back in
  };

  return (
    <div className="stack-wrapper">

      {/* main circle (DO NOT change your CSS class) */}
      <div
        className="stack-selected"
        onClick={() => setOpen((prev) => !prev)}
      >
        👤
      </div>

      {/* stack */}
      <div className="stack">
        {items.map((item, i) => (
          <div
            key={i}
            className={`stack-item ${open ? "open" : ""}`}
            style={{
              transform: open
                ? `translate(-50%, ${(i) * 130}px)`
                : "translate(-50%, 0px)",
            }}
            onClick={(e) => {
              e.stopPropagation();
              handleClick(item);
            }}
          >
            <div className="icon">
              {item.icon}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}