import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <div className="hero container">
      <div className="banner">
        <h1>{title}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
          animi delectus quisquam repudiandae natus totam nisi quasi, recusandae
          odit ipsam placeat dolor dicta hic pariatur culpa sed, beatae saepe
          voluptate, aspernatur rerum! Tempore, animi vitae?
        </p>
      </div>
      <div className="banner">
        <img src={imageUrl} alt="hero" className="animated-image" />
        <span>
          <img src="/Vector.png" alt="Vector" />
        </span>
      </div>
    </div>
  );
};

export default Hero;
