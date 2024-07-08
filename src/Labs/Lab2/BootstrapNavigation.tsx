import React from "react";
import stackedImg from "../../images/stacked.jpg";

export default function BootstrapNavigation() {
  return (
    <div>
      <div id="wd-css-navigating-with-tabs">
        <h2>Tabs</h2>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Active
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Disabled
            </a>
          </li>
        </ul>
      </div>

      <div id="wd-css-navigating-with-cards">
        <h2>Cards</h2>
        <div className="card" style={{ width: "18rem" }}>
          <img src={stackedImg} className="card-img-top" alt="Stacking Starship" />
          <div className="card-body">
            <h5 className="card-title">Stacking Starship</h5>
            <p className="card-text">
              Stacking the most powerful rocket in history. Mars or bust!
            </p>
            <a href="#" className="btn btn-primary">
              Boldly Go
            </a>
          </div>
        </div>
      </div>

      <div id="wd-bootstrap-positions-margins-paddings">
        <h2>Bootstrap Positions, Margins, and Paddings</h2>

        <div className="position-relative p-5 bg-light border">
          <div className="position-absolute top-0 start-50 translate-middle bg-primary text-white p-2">
            Position Absolute
          </div>
          <p>Relative positioning with absolute positioned child.</p>
        </div>

        <div className="mt-5 mb-3 p-3 bg-secondary text-white">
          <p className="mb-1">Margin top 5 and bottom 3, padding 3</p>
        </div>

        <div className="p-5 bg-success text-white">
          <p className="pt-1 pb-2 ps-3 pe-4">
            Padding top 1, bottom 2, start 3, end 4
          </p>
        </div>

        <div className="mt-2 mb-4">
          <button className="btn btn-info mt-3">Button with margin top 3</button>
        </div>
      </div>
    </div>
  );
}
