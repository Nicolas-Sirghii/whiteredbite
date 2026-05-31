import { useEffect, useState } from "react";

export default function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("/api/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Failed to load message"));
  }, []);

  return (
    <div className="container">
      <div className="header"></div>
      <div className="card">
        <h1>Database Connection Status</h1>
        <p className="message">{message}</p>
        <div className="status">System Online</div>
      </div>
    </div>
  );
}