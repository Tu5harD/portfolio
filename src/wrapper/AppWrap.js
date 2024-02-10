import React from "react";
import { NavigationDots, SocialMedia } from "../components";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames} `}>
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Component />

          <div className="copyright uppercase">
            <p className="text-sm text-left leading-4">@2024 Tush Dev</p>
            <p className="text-sm text-left leading-4">All rights reserved</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
