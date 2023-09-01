import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    {/* this is the div for the content */}
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            “Once you decide on your occupation, you must immerse yourself in
            your work.
          </p>
        </div>
        <p className="p__opensans">
          You have to fall in love with your work. Never complain about your
          job. You must dedicate your life to mastering your skill. That’s the
          secret of success and it’s the key to being regarded honorably.” —
          Jiro Ono
        </p>
      </div>
      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Co-Founder</p>
        <img src={images.sign} alt="signature" />
      </div>
    </div>
  </div>
);

export default Chef;
