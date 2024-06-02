import React from "react";

export function ForgotPasswordContainer() {
  return (
    <div className="flex flex-col text-xl font-bold bg-indigo-500 text-stone-500">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ab3c38c71c8b9ac251853b94ba39c18df55254b9dc023f3393bdafbede7f3bc?apiKey=3e43335bbd3f4bb9a825115c2709d66b&"
        alt=""
        className="z-10 self-end max-w-full aspect-[1.33] w-[610px]"
      />
      <section className="flex justify-center items-center px-16 py-16 w-full bg-white rounded-[40px_40px_80px_0px] max-md:px-5 max-md:max-w-full">
        <form className="flex flex-col max-w-full w-[420px]">
          <h1 className="text-4xl text-black">Forgot</h1>
          <h2 className="mt-3 text-4xl text-black">Your Password?</h2>
          <div className="flex flex-col items-start px-3.5 pb-7 mt-12 whitespace-nowrap rounded-lg border border-solid border-stone-500 max-md:pr-5 max-md:mt-10">
            <label htmlFor="emailInput" className="sr-only">
              Email
            </label>
            <input
              id="emailInput"
              type="email"
              className="justify-center p-2.5 bg-white"
              placeholder="Email"
              aria-label="Email"
            />
          </div>
          <div className="flex flex-col items-start px-3.5 pb-7 mt-9 rounded-lg border border-solid border-stone-500 max-md:pr-5">
            <label htmlFor="newPasswordInput" className="sr-only">
              New Password
            </label>
            <input
              id="newPasswordInput"
              type="password"
              className="justify-center p-2.5 bg-white"
              placeholder="New Password"
              aria-label="New Password"
            />
          </div>
          <div className="flex flex-col justify-center items-start px-3.5 py-1 mt-9 rounded-lg border border-solid border-stone-500 max-md:pr-5">
            <label htmlFor="confirmPasswordInput" className="sr-only">
              Confirm Password
            </label>
            <input
              id="confirmPasswordInput"
              type="password"
              className="justify-center p-2.5 max-w-full bg-white w-[212px]"
              placeholder="Confirm Password"
              aria-label="Confirm Password"
            />
          </div>
          <button
            type="submit"
            className="justify-center items-center px-4 py-3.5 mt-14 text-2xl text-white bg-indigo-500 rounded-md max-md:px-5 max-md:mt-10"
          >
            Reset Password
          </button>
        </form>
      </section>
    </div>
  );
}
