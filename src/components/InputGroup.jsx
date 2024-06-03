import React from "react";

const InputGroup = ({ label, name, type = "text", id }) => {
  return (
    <div className="flex flex-col flex-1 grow shrink-0 items-start px-3.5 pb-7 whitespace-nowrap    basis-0 border-stone-500 w-fit max-md:pr-5">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={label}
        aria-label={label}
        className="justify-center p-2.5 bg-white w-full"
      />
    </div>
  );
};

export default InputGroup;
