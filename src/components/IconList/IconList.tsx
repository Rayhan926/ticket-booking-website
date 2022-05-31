import { IconListProps } from "@config/types";
import React from "react";

const IconList = ({
  icon,
  text,
  className = "",
  titleClass = "",
  ...props
}: IconListProps) => {
  return (
    <div className={`flex items-center gap-2 ${className}`} {...props}>
      {icon}
      <p className={`${titleClass}`}>{text}</p>
    </div>
  );
};

export default IconList;
