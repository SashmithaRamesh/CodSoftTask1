import React from "react";

const sizes = {
  s: "text-[63px] font-bold md:text-5xl",
  xs: "text-[25px] font-bold md:text-[23px] sm:text-[21px]",
};

const Heading = ({ children, className = "", size = "xs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-pink-300_01 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
