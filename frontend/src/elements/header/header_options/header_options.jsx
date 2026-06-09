import { AddNewCard } from "./add_new_card";
import { LearningOptions } from "./learning_options";
import { learnOptionsJson } from "../../../data/learn_options_json";


const loginItems = [
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

export function HeaderOptions() {
  return (
    <div className="header-options">
      <AddNewCard />
      <LearningOptions options={learnOptionsJson} place={2} />
      <LearningOptions options={loginItems} place={3} />
    </div>
  );
}