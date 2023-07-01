import { useState } from "react";

const Subscribe = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="w-full h-[35vh] bg-gray-100 flex items-center justify-center flex-col">
      <h1 className="font-semibold text-lg">Enter The World Of Louis Etor</h1>
      <p className="text-gray-600">Hear about latest designs and more.</p>

      {/* input */}
      <div className="mt-5 bg-black w-[20%] h-[40px] flex relative max-md:w-[50%]">
        <input
          type="email"
          required
          className={`flex-1 px-3 outline-none border-[1px] text-gray-400 ${
            isFocused
              ? "border-purple-500 ease-in duration-300"
              : "ease-in duration-300"
          }`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <div
          className={`absolute px-3 bottom-3 left-3 ease-in-out ${
            isFocused ? "-translate-y-6 opacity-0" : "translate-y-0 opacity-100"
          } text-purple-500 text-sm pointer-events-none`}
        >
          email address
        </div>
        <p
          className={`absolute px-3 bottom-[-25px] transition-all duration-500 transform ${
            isFocused
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          } z-10 text-purple-500 text-sm`}
        >
          email address
        </p>
      </div>
    </div>
  );
};

export default Subscribe;
