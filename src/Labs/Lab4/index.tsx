import React from 'react';
import ClickEvent from './ClickEvent'; // Ensure this path is correct
import PassingDataOnEvent from './PassingDataOnEvent'; // Ensure this path is correct
import PassingFunctions from './PassingFunctions'; // Ensure this path is correct
import EventObject from './EventObject'; // Ensure this path is correct
import Counter from './Counter'; // Ensure this path is correct
import BooleanStateVariables from './BooleanStateVariables'; // Ensure this path is correct
import StringStateVariables from './StringStateVariables'; // Ensure this path is correct
import DateStateVariable from './DateStateVariable'; // Ensure this path is correct
import ObjectStateVariable from './ObjectStateVariable'; // Ensure this path is correct

export default function Lab4() {
  function sayHello() {
    alert("Hello");
  }

  return (
    <div id="wd-lab4" className="container">
      <h2>Lab 4 - Handling User Events</h2>
      <h3>Handling Click Events</h3>
      <ClickEvent />
      <h3>Passing Data on Event</h3>
      <PassingDataOnEvent />
      <h3>Passing Functions as Parameters</h3>
      <PassingFunctions theFunction={sayHello} />
      <h3>The Event Object</h3>
      <EventObject />
      <h3>Managing Component State</h3>
      <Counter />
      <BooleanStateVariables />
      <StringStateVariables />
      <DateStateVariable />
      <ObjectStateVariable />
    </div>
  );
}
