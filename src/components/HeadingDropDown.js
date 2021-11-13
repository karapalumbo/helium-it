import React from "react";

import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";

export default function HeadingDropDown(props) {
  return (
    <SlideDown className={"heading-dropdown"}>
      {props.open ? props.children : null}
    </SlideDown>
  );
}
