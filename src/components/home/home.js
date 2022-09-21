import React from "react";
import "./home.css";
import Particle from "../loader/particles";

export default function home() {
  return (
    <>
      <Particle />
      <div className="home">This is My Loader</div>;
    </>
  );
}
