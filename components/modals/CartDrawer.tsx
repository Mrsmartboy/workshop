import React from "react";
import { ShoppingBag, X } from "lucide-react";
import { Course } from "@/types";

export function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onRemoveItem,
  onCheckout,
}: {
  isOpen: boolean;
  onClose: () => void;
  cartItems: Course[];
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-sm animate-in fade-in">
      <div
        className="w-full max-w-[420px] bg-white h-full shadow-2xl p-6 flex flex-col justify-between animate-in slide-in-from-right"
        role="dialog"
        aria-modal="true"
      >
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-[#eaedf5]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#304ffe]" />
              <h3 className="text-lg font-bold text-[#0d1033]">
                Your Program Cart ({cartItems.length})
              </h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-1 rounded-md text-[#606482] hover:text-[#0d1033]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart List */}
          <div className="mt-6 space-y-4 max-h-[50vh] overflow-y-auto">
            {cartItems.length === 0 ? (
              <div className="py-12 text-center">
                <div className="w-12 h-12 rounded-full bg-[#f4f6ff] text-[#304ffe] flex items-center justify-center mx-auto mb-3">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <p className="text-sm font-semibold text-[#0d1033]">
                  Your cart is empty
                </p>
                <p className="text-xs text-[#606482] mt-1">
                  Explore our workshops, hackathons, and bootcamps.
                </p>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-xl border border-[#eaedf5] flex items-center justify-between gap-3 bg-[#fbfcff]"
                >
                  <div>
                    <h4 className="text-xs font-bold text-[#0d1033] line-clamp-1">
                      {item.title}
                    </h4>
                    <span className="text-[11px] text-[#304ffe] font-semibold">
                      {item.label}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => onRemoveItem(item.id)}
                    className="text-xs text-red-500 hover:text-red-700 font-semibold"
                  >
                    Remove
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Cart Summary & Checkout */}
        <div className="pt-6 border-t border-[#eaedf5]">
          <div className="flex items-center justify-between text-sm mb-4">
            <span className="text-[#606482]">Programs Selected:</span>
            <span className="text-lg font-bold text-[#0d1033]">
              {cartItems.length}
            </span>
          </div>
          <button
            type="button"
            disabled={cartItems.length === 0}
            onClick={onCheckout}
            className="w-full py-3.5 bg-[#304ffe] disabled:bg-gray-300 hover:bg-[#253bdf] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors"
          >
            Proceed to Registration
          </button>
        </div>
      </div>
    </div>
  );
}
