import React from "react";
import InputField from "../components/InputField";
import FormField from "../components/FormField";

export function RegisterContainer() {
  return (
    <div className="pl-7 bg-indigo-500 max-md:pl-5">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
          <div className="flex z-10 flex-col mt-7 max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f4508ea8-4d2f-4aeb-ab62-fe21eca32c40?apiKey=3e43335bbd3f4bb9a825115c2709d66b&"
              className="max-w-full aspect-[2.13] w-[420px]"
              alt=""
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e41146e0073108f2297fde05692f8bc1edee4b5e217c868b8e59d0806ed55087?apiKey=3e43335bbd3f4bb9a825115c2709d66b&"
              className="self-end mt-5 max-w-full aspect-[0.93] w-[514px]"
              alt=""
            />
          </div>
        </div>
        <form className="flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full">
          <section className="flex flex-col grow py-20 pr-6 pl-20 w-full text-xl font-bold bg-white rounded-[40px_0px_0px_40px] text-stone-500 max-md:px-5 max-md:max-w-full">
            <header className="self-center mt-12 text-4xl text-black max-md:mt-10">
              Create Account
            </header>
            <FormField>
              <InputField id="name" label="Name" />
              <InputField id="email" label="Email" />
            </FormField>
            <FormField>
              <InputField id="password" label="Password" />
              <InputField id="confirm-password" label="Confirm Password" />
            </FormField>
            <div className="flex gap-5 justify-between items-start self-center px-7 pt-3.5 mt-24 max-w-full rounded-lg border border-solid border-stone-500 w-[305px] max-md:pl-5 max-md:mt-10">
              <label htmlFor="role" className="sr-only">
                Select role
              </label>
              <select
                id="role"
                className="justify-center px-2.5 bg-white max-md:px-5"
                aria-label="Select role"
              >
                <option value="candidate">Candidate</option>
                <option value="employer">Employer</option>
              </select>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/37ccf040cddda1ae436bafd20b77daa72f3226c0af06c7df410de003596d71bd?apiKey=3e43335bbd3f4bb9a825115c2709d66b&"
                className="shrink-0 w-5 aspect-square fill-white"
                alt=""
              />
            </div>
            <button
              type="submit"
              className="justify-center items-center self-end px-4 py-3.5 mt-8 max-w-full text-2xl text-white bg-indigo-500 rounded-md w-[654px] max-md:px-5"
            >
              Create Account
            </button>
            <div className="self-center mt-9 ml-32">Or</div>
            <button
              type="button"
              className="justify-center items-center self-end px-4 py-3.5 mt-9 max-w-full text-2xl text-indigo-500 bg-white rounded-md border border-indigo-500 border-solid w-[654px] max-md:px-5"
            >
              Sign in
            </button>
          </section>
        </form>
      </div>
    </div>
  );
}
