import { IconListProps } from "@config/types";
import React from "react";

const IconList = ({
  icon,
  title,
  className = "",
  titleClass = "",
  subtitle,
  subtitleClass,
  ...props
}: IconListProps) => {
  return (
    <div>
      <div className={`flex items-center gap-2 ${className}`} {...props}>
        {icon}
        <p className={`${titleClass}`}>{title}</p>
      </div>
      {subtitle && <p className={`${subtitleClass}`}>{subtitle}</p>}
    </div>
  );
};

export default IconList;
