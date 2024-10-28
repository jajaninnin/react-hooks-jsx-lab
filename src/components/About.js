import React from "react";
import { image } from "../data/data";

// const H2 = "About me"

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>This is a paragraph tag</p>
      <img src={image} alt="I made this"></img>
    </div>);
}

export default About;
