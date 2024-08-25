import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[10px]",
};
const variants = {
  fill: {
    pink_300_01: "bg-pink-300_01 shadow-xs",
  },
};
const sizes = {
  xs: "h-[59px] px-[35px] text-[25px]",
  sm: "h-[59px] px-[13px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "sm",
  color = "pink_300_01",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer bg-pink-300_01 rounded-[10px] ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["pink_300_01"]),
};

export { Button };
