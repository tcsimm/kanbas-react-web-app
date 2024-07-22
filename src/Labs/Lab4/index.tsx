import React from "react";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";

export default function Lab4() {
  return (
    <div id="wd-lab4" className="container">
      <h2>Lab 4 - Handling User Events</h2>
      <h3>Handling Click Events</h3>
      <ClickEvent />
      <PassingDataOnEvent />
    </div>
  );
}
