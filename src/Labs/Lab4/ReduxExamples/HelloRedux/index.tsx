import React from "react";
import { useSelector } from "react-redux";

export default function HelloRedux() {
  const message = useSelector((state: any) => state.helloReducer.message);
  console.log('HelloRedux is rendering with message:', message);

  return (
    <div id="wd-hello-redux">
      <h3>Hello Redux</h3>
      <h4>{message}</h4>
      <hr />
    </div>
  );
}
