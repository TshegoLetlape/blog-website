import React from "react";
import "./About.css";

const AboutUs = () => {
  return (
    <>
      <section className="content-item grey" id="gallery-item">
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              <img
                src="https://www.bootdey.com/image/550x350/"
                className="img-responsive"
                alt="Landscape of Lake"
              />
            </div>
            <div className="col-sm-4">
              <h2>NGWAO YA BATSWANA</h2>
              <div className="box">Don't forget me.</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
