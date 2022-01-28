import React from "react";

import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";

const HeadingDropDown = (props) => {
  return (
    <SlideDown className={"heading-dropdown"}>
      {props.open ? props.children : null}
    </SlideDown>
  );
};

export default HeadingDropDown;
