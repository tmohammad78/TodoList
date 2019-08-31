import React from "react";

import Hero from "../../assets/hero.jpg";
import "./Main.scss";

const Main = () => (
  <div className="mainBox clearfix ">
    <div className="wrapper clearfix">
      <div className='inner'>
        <div className="infoBox">
          <h2>
            Organize life
            <span>Then go enjoy it…</span>
          </h2>
          <p>
            Life can feel overwhelming, but it doesn’t have to. Todoist lets you
            keep track of everything in one place, so you can get it all done
            and enjoy more peace of mind along the way.
          </p>
        </div>
        <div className="imageBox">
          <img src={Hero} className="image" />
        </div>
      </div>
    </div>
  </div>
);

export default Main;
