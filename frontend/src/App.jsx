import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./elements/header/header";
import { ProgressBar } from "./elements/progress_bar/Progress_bar";
import { LearningFeed } from "./elements/learning_feed/Learning_feed";

export default function App() {
  const [message, setMessage] = useState("Loading...");

  // useEffect(() => {
  //   fetch("/api/message")
  //     .then((res) => res.json())
  //     .then((data) => setMessage(data.message))
  //     .catch(() => setMessage("Failed to load message"));
  // }, []);

  return (
    <div className="app">
      <Header />
      <ProgressBar progress={50} />
      <LearningFeed />
    </div>
  );
}