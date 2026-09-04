import Link from "next/link";
import { ArrowLeft, Building2 } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 text-center text-[#0d1033]">
      <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#f0f3ff] text-[#304ffe] text-xs font-black uppercase tracking-wider rounded-full mb-4 border border-[#dce4ff]">
        <Building2 className="w-3.5 h-3.5" />
        Codegnan Labs
      </span>
      <h1 className="text-6xl font-black text-[#0d1033] mb-3">404</h1>
      <h2 className="text-2xl font-bold mb-4">Campus Page Not Found</h2>
      <p className="text-sm text-[#606482] max-w-[420px] mb-8">
        The experience or campus lab page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-[#304ffe] text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-[#253bdf] transition-all"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Codegnan Labs Home</span>
      </Link>
    </div>
  );
}
