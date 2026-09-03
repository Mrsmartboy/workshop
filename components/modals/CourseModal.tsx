import React from "react";
import { Sparkles, X } from "lucide-react";
import { Course } from "@/types";

export function CourseModal({
  isOpen,
  course,
  onClose,
  onAddToCart,
}: {
  isOpen: boolean;
  course: Course | null;
  onClose: () => void;
  onAddToCart: (course: Course) => void;
}) {
  if (!isOpen || !course) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 backdrop-blur-sm p-4 animate-in fade-in">
      <div
        className="w-full max-w-[500px] bg-white rounded-2xl p-7 shadow-2xl relative animate-in zoom-in-95"
        role="dialog"
        aria-modal="true"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-1 rounded-md text-[#606482] hover:text-[#0d1033]"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#304ffe]">
          <Sparkles className="w-4 h-4" /> Codegnan Program
        </div>

        <h3 className="mt-3 text-2xl font-black text-[#0d1033]">
          {course.title}
        </h3>

        <p className="mt-3 text-sm text-[#606482] leading-relaxed">
          {course.description}
        </p>

        <div className="mt-6 flex items-center justify-between p-4 bg-[#f8f9fd] rounded-xl border border-[#eaedf5]">
          <div>
            <span className="block text-[11px] font-semibold text-[#888c9f] uppercase tracking-wider">
              Duration
            </span>
            <span className="text-sm font-bold text-[#0d1033]">
              {course.duration}
            </span>
          </div>
          <div className="text-right">
            <span className="block text-[11px] font-semibold text-[#888c9f] uppercase tracking-wider">
              Format
            </span>
            <span className="text-sm font-bold text-[#304ffe]">
              {course.label}
            </span>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <button
            type="button"
            onClick={() => onAddToCart(course)}
            className="flex-1 py-3 bg-[#304ffe] hover:bg-[#253bdf] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors"
          >
            Add to Cart
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-3 border border-[#eaedf5] text-[#606482] hover:text-[#0d1033] font-bold text-xs uppercase tracking-wider rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
