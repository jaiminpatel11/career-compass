import React from "react";

const FormField = ({ children }) => (
  <div className="flex gap-5 self-end mt-20 max-w-full w-[654px] max-md:flex-wrap max-md:mt-10">
    {children}
  </div>
);

export default FormField;
