import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import Hero from "../../../assets/hero.jpg";
import second from "../../../assets/second.png";

import "./Home.scss";

const Main = () => {
  return (
    <Fragment>
      <div className="mainBox clearfix ">
        <div className="wrapper clearfix">
          <div className="inner clearfix">
            <div className="infoBox">
              <h2>
                Organize life
                <span>Then go enjoy it…</span>
              </h2>
              <p>
                Life can feel overwhelming, but it doesn’t have to. Todoist lets
                you keep track of everything in one place, so you can get it all
                done and enjoy more peace of mind along the way.
              </p>
            </div>
            <div className="imageBox">
              <img src={Hero} className="image" />
            </div>
          </div>
        </div>
      </div>
      <div className="mainBox clearfix">
        <div className="wrapper clearfix">
          <div className="inner clearfix">
            <div
              className="infoBox"
              style={{
                float: "right"
              }}
            >
              <h2>Never worry about forgetting things again</h2>
              <p>
                Let Todoist remember it all for you. You can get tasks out of
                your head and onto your to-do list anytime, anywhere, on any
                device – even offline.
              </p>
            </div>
            <div className="imageBoxsecond">
              <img src={second} className="image" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default withRouter(Main);
