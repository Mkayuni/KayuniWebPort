// src/components/about/ModeToggle.tsx
"use client";

import { useState } from "react";
import { FiBriefcase, FiUser } from "react-icons/fi";

interface ModeToggleProps {
  onModeChange: (mode: "recruiter" | "personal") => void;
}

const ModeToggle: React.FC<ModeToggleProps> = ({ onModeChange }) => {
  const [mode, setMode] = useState<"recruiter" | "personal">("recruiter");

  const toggleMode = () => {
    const newMode = mode === "recruiter" ? "personal" : "recruiter";
    setMode(newMode);
    onModeChange(newMode);
  };

  return (
    <div className="flex justify-center mb-8">
      <div className="bg-gray-200 dark:bg-gray-800 p-1 rounded-full flex">
        <button
          onClick={() => {
            setMode("recruiter");
            onModeChange("recruiter");
          }}
          className={`py-2 px-4 rounded-full flex items-center gap-2 ${
            mode === "recruiter"
              ? "bg-primary text-white"
              : "text-gray-700 dark:text-gray-300"
          } transition-colors`}
        >
          <FiBriefcase className="h-4 w-4" />
          <span>Professional</span>
        </button>
        <button
          onClick={() => {
            setMode("personal");
            onModeChange("personal");
          }}
          className={`py-2 px-4 rounded-full flex items-center gap-2 ${
            mode === "personal"
              ? "bg-primary text-white"
              : "text-gray-700 dark:text-gray-300"
          } transition-colors`}
        >
          <FiUser className="h-4 w-4" />
          <span>Personal</span>
        </button>
      </div>
    </div>
  );
};

export default ModeToggle;