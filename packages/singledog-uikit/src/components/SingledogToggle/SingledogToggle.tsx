import React from "react";
import { SingledogStack, SingledogInput, SingledogLabel } from "./StyledSingledogToggle";
import { SingledogToggleProps, scales } from "./types";

const SingledogToggle: React.FC<SingledogToggleProps> = ({ checked, scale = scales.MD, ...props }) => (
  <SingledogStack scale={scale}>
    <SingledogInput id={props.id || "singledog-toggle"} scale={scale} type="checkbox" checked={checked} {...props} />
    <SingledogLabel scale={scale} checked={checked} htmlFor={props.id || "singledog-toggle"}>
      <div className="singledogs">
        <div className="singledog" />
        <div className="singledog" />
        <div className="singledog" />
        <div className="butter" />
      </div>
    </SingledogLabel>
  </SingledogStack>
);

SingledogToggle.defaultProps = {
  scale: scales.MD,
};

export default SingledogToggle;
