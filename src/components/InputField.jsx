import React from "react";

const InputField = ({ id, label }) => (
  <div className="flex flex-col flex-1 grow shrink-0 items-start px-3.5 pb-7 rounded-lg border border-solid basis-0 border-stone-500 w-fit max-md:pr-5">
    <label htmlFor={id} className="sr-only">
      {label}
    </label>
    <input
      type="text"
      id={id}
      className="justify-center p-2.5 bg-white w-[79px]"
      aria-label={label}
      placeholder={label}
    />
  </div>
);

export default InputField;
