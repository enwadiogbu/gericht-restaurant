import React from "react";
import { images } from "../../constants";
import "./AboutUs.css";

import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          As a preferred standing location of Phoenix, Arizona, we have been in
          business for 20 plus years. We started as a catering business for
          special events, corporate conferences, and weddings, and have been
          serving the greater Phoenix area for over two decades now.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>
      {/* split replica of above inner div for About Us */}
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Our restaurant name, Gericht, holds strong meaning and prescendence in
          the origin's country of Germany. Gericht, in German, means 'to stand
          trial'. We named our restaurant after our family name because we
          empower our customers to hold the final Judgement of Taste.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
