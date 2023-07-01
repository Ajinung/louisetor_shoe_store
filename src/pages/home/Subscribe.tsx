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
          className={`flex-1 px-3 outline-none border-[1px] text-gray-400 transition-all ${
            isFocused ? "border-purple-500" : ""
          }`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {isFocused ? (
          <p
            className={`absolute px-3 bottom-[-25px] transition-transform duration-300 transform translate-y-0 z-10 text-purple-500 text-sm`}
          >
            email address
          </p>
        ) : (
          <p
            className={`absolute px-3 bottom-[-25px] transition-transform duration-300 transform -translate-y-9 z-10 text-slate-400 text-sm`}
          >
            email address
          </p>
        )}
      </div>
    </div>
  );
};

export default Subscribe;
