"use client";

import { cn } from "@/lib/util";
import { useState } from "react";

interface Prop {
  label?: string;
  name?: string;
}

const CustomCheckbox = ({ ...prop }: Prop) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex items-center justify-between">
      <label htmlFor={prop?.name} className="text-xs font-medium">
        {prop?.label}
      </label>

      <div
        onClick={toggleCheckbox}
        className={cn(
          "w-4 h-4 flex items-center justify-center border rounded cursor-pointer border-lightGreen"
        )}
      >
        {isChecked && (
          <div
            className={cn(
              "w-4 h-4 flex items-center justify-center border-2 rounded cursor-pointer bg-lightGreen"
            )}
          >
            <p className="text-white text-xs">✔</p>
          </div>
        )}
      </div>

      {/* Hidden checkbox input for accessibility */}
      <input
        type="checkbox"
        checked={isChecked}
        onChange={toggleCheckbox}
        className="hidden"
        id="checkbox"
        name={prop?.name}
      />
    </div>
  );
};

export default CustomCheckbox;
