import React from "react";

export function LevelSignal({
  level,
}: {
  level: "Beginner" | "Intermediate" | "Advanced";
}) {
  const bars = level === "Beginner" ? 1 : level === "Intermediate" ? 2 : 3;

  return (
    <div className="flex items-end gap-1 h-3.5" aria-hidden="true">
      <div
        className={`w-1 h-2 rounded-sm ${
          bars >= 1 ? "bg-[#304ffe]" : "bg-[#d9dcf0]"
        }`}
      />
      <div
        className={`w-1 h-2.5 rounded-sm ${
          bars >= 2 ? "bg-[#304ffe]" : "bg-[#d9dcf0]"
        }`}
      />
      <div
        className={`w-1 h-3.5 rounded-sm ${
          bars >= 3 ? "bg-[#304ffe]" : "bg-[#d9dcf0]"
        }`}
      />
    </div>
  );
}
