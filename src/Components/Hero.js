import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="intro container">
      <div className="hero">
        <video
          className="video"
          src="images/dance.mp4"
          type="video/mp4"
          autoPlay
          muted
          loop
        ></video>
      </div>
      <div className="overlay"></div>
      <div className="info">
        <h1>Explore Tswana Culture Bliss!</h1>
        <p>
          The Tswana tribe, rooted in Southern Africa, boasts a rich cultural
          heritage expressed through their distinctive language, vibrant
          traditional attire, and rhythmic celebrations that transmit stories
          across generations.
        </p>
        <a href="#">
          <button>Learn More</button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
