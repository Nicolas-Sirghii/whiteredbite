import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./elements/header/header";

export default function App() {
  // const [message, setMessage] = useState("Loading...");

  // useEffect(() => {
  //   fetch("/api/message")
  //     .then((res) => res.json())
  //     .then((data) => setMessage(data.message))
  //     .catch(() => setMessage("Failed to load message"));
  // }, []);

  return (
    <div className="app">
      <Header />
      
    </div>
  );
}