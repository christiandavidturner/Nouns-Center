import React from "react";

const Divider = () => {
  return (
    <div className="relative py-8 w-11/12 m-auto opacity-70">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-center">
        <span className="px-2 bg-black text-sm text-white">⌐◨-◨</span>
      </div>
    </div>
  );
};

export default Divider;