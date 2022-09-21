import React from "react";
import "./loader.css";
import Loadercomp from "./loadercomp";
// import Particle from "./particles";
export default function loader() {
  return (
    <>
      <div id="particles">{/* <Particle /> */}</div>
      <Loadercomp />
    </>
  );
}
