import React from "react";

export default function ResetButton({ onReset }) {
  return (
    <div className="flex justify-center">
      <button
        className="lg:text-sm text-xs hover:text-[#F0F3FF] transition-all duration-300 hover:bg-[#535C91] bg-[#9290C3] w-32 h-8 rounded-lg text-center font-medium text-[#1B1A55]"
        onClick={onReset}
      >
        Reset
      </button>
    </div>
  );
}
