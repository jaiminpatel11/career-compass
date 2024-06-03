import React from "react";

const FormButton = ({ className, children }) => {
  return (
    <button type="submit" className={className}>
      {children}
    </button>
  );
};

export default FormButton;
