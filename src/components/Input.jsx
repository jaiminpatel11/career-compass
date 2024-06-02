import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-lg",
};

const variants = {
  outline: {
    grey_700: "border-grey-700 border border-solid",
  },
};

const sizes = {
  xs: "h-[29px] px-5",
  sm: "w-[46px] px-5",
};

const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      label = "",
      prefix,
      suffix,
      onChange,
      shape,
      variant = "outline",
      size = "sm",
      color = "grey_700",
      ...restProps
    },
    ref
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target.value);
    };

    return (
      <button
        className={`${className} flex items-center justify-center self-stretch cursor-text relative border-gray-700 border border-solid rounded-lg ${
          shape ? shapes[shape] : ""
        } ${sizes[size]} ${variants[variant][color]}`}
        {...restProps}
      >
        {!!label && label}
        {!!prefix && prefix}
        <input
          ref={ref}
          type={type}
          name={name}
          onChange={handleChange}
          placeholder={placeholder}
          {...restProps}
        />
        {!!suffix && suffix}
      </button>
    );
  }
);

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["sm", "xs"]),
  variant: PropTypes.oneOf(["outline"]),
  color: PropTypes.oneOf(["grey_700"]),
};

export default Input;
