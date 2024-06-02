import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  round: "rounded-md",
  square: "rounded-[0px]",
};

const variants = {
  fill: {
    white_A700: "bg-white-A700 text-gray-700",
    indigo_400: "bg-indigo-400 text-white-A700",
  },
};

const sizes = {
  xs: "w-[44px] px-[9px] text-xl",
  sm: "w-[48px] px-3.5",
  md: "w-[57px] px-[35px] text-2xl",
  lg: "w-[68px] px-2.5 text-xl",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "xs",
  color = "white_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer ${
        shape ? shapes[shape] : ""
      } ${sizes[size]} ${variants[variant][color]}`}
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
  shape: PropTypes.oneOf(["circle", "round", "square"]),
  size: PropTypes.oneOf(["sm", "lg", "xs", "md"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["white_A700", "indigo_400"]),
};

export default Button;
