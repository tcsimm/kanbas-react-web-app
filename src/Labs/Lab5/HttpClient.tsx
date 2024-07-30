import React, { useState } from "react";
import * as client from "./client";

export default function HttpClient() {
  const [welcomeOnClick, setWelcomeOnClick] = useState("");

  const fetchWelcomeOnClick = async () => {
    try {
      const message = await client.fetchWelcomeMessage();
      setWelcomeOnClick(message);
    } catch (error) {
      console.error("Error fetching welcome message:", error);
    }
  };

  return (
    <div>
      <h3>HTTP Client</h3>
      <hr />
      <h4>Requesting on Click</h4>
      <button className="btn btn-primary me-2" onClick={fetchWelcomeOnClick}>
        Fetch Welcome
      </button>
      <br />
      Response from server: <b>{welcomeOnClick}</b>
    </div>
  );
}
