import React from "react";

import "./MenuItem.css";

const MenuItem = ({ title, price, tags }) => (
  <div className="app__menuitem">
    <div className="app__menuitem-head">
      <div className="app__menuitem-name">
        <p className="p__cormorant" style={{ color: "#DCCA87" }}>
          {title}
        </p>
      </div>

      {/* this div is for the dash between the titles and price */}
      <div className="app__menuitem-dash" />

      {/* copy of previous menu {title} div for the price of each menuitem wine */}
      <div className="app__menuitem-price">
        <p className="p__cormorant">{price}</p>
      </div>
    </div>

    {/* this div is for the tags of each menuitem */}
    <div className="app__menuitem-sub">
      <p className="p__opensans" style={{ color: "#AAAAAA" }}>
        {tags}
      </p>
    </div>
  </div>
);

export default MenuItem;
