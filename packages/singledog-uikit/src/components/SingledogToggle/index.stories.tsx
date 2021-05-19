import React, { useState } from "react";
import SingledogToggle from "./SingledogToggle";

export default {
  title: "Components/SingledogToggle",
  component: SingledogToggle,
};

export const Default: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggle = () => setIsChecked(!isChecked);

  return (
    <>
      <div style={{ marginBottom: "32px" }}>
        <SingledogToggle checked={isChecked} onChange={toggle} />
      </div>
      <div>
        <SingledogToggle checked={isChecked} onChange={toggle} scale="sm" />
      </div>
    </>
  );
};
