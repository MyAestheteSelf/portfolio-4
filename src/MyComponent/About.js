import React from "react";
import aboutPng from '../Images/2.png'
import "../css/about.css"
export const About = () => {
  return (
    <div className="container-about">
      <img src={aboutPng} alt="" className="profile-img" />
      <p className="content-about">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        fugiat omnis odio veritatis saepe deserunt repudiandae nemo! Accusamus
        aliquid fuga at? Obcaecati cumque inventore, fugit nam assumenda quia
        voluptatem ex.
      </p>
    </div>
  );
};
