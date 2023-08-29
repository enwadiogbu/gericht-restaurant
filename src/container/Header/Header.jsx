import React from "react";

import { images } from "../../constants";
import "./Header.css";
import { SubHeading } from "../../components";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavor" />
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Enjoy a class A dining experience in the Biltmore Phoenix's Gericht
        Restaurant. Lead Chef, Emeka Nwadiogbu, Jr., has won countless awards
        for his organic, healthy seafood and salmon specialty entres. At
        Gericht, we strive to provide uncomparable winery and dining that is
        unmatched!
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
