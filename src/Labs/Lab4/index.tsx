import React from 'react';
import ClickEvent from './ClickEvent';
import PassingDataOnEvent from './PassingDataOnEvent';
import PassingFunctions from './PassingFunctions';
import EventObject from './EventObject';
import Counter from './Counter';
import BooleanStateVariables from './BooleanStateVariables';
import StringStateVariables from './StringStateVariables';
import DateStateVariable from './DateStateVariable';
import ObjectStateVariable from './ObjectStateVariable';
import ArrayStateVariable from './ArrayStateVariable';
import ParentStateComponent from './ParentStateComponent';
import ReduxExamples from "./ReduxExamples";

export default function Lab4() {
  console.log('Lab4 is rendering');

  return (
    <div id="wd-lab4" className="container">
      <h2>Lab 4 - Handling User Events</h2>
      <h3>Handling Click Events</h3>
      <ClickEvent />
      <h3>Passing Data on Event</h3>
      <PassingDataOnEvent />
      <h3>Passing Functions as Parameters</h3>
      <PassingFunctions theFunction={() => console.log('Hello')} />
      <h3>The Event Object</h3>
      <EventObject />
      <h3>Managing Component State</h3>
      <Counter />
      <BooleanStateVariables />
      <StringStateVariables />
      <DateStateVariable />
      <ObjectStateVariable />
      <ArrayStateVariable />
      <ParentStateComponent />
      <ReduxExamples/>
    </div>
  );
}
