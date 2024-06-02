import React from "react";

const sizes = {
  s: "text-[40px] font-bold md:text-[38px] sm:text-4xl",
  xs: "text-xl font-bold",
};

const Heading = ({
  children,
  className = "",
  size = "s",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component
      className={`text-black-900 font-montserrat ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export default Heading;
