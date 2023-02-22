import React from "react";
import classes from "./index.module.scss";
import Header from "Components/Header";

const LandingPage = () => {
  return (
    <div className={classes.app}>
      <Header />
      <header className={classes.appHeader}>
           <h1 className="name">NY NAME IS ADNAN HASSAN</h1>
      </header>
    </div>
  );
};

export default LandingPage;
