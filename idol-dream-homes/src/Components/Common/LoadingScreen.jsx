import React from "react";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[9999] bg-[#0b0a09]/85 backdrop-blur-sm">
      {/* Top progress bar */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-white/5 overflow-hidden">
        <div className="h-full w-1/3 bg-gradient-to-r from-[#C2B4A3] via-[#E8DDD0] to-[#C2B4A3] animate-[bar_1.4s_ease-in-out_infinite]" />
      </div>

      {/* Center logo + ring */}
      <div className="absolute inset-0 grid place-items-center">
        <div className="relative">
          <div className="absolute -inset-6 rounded-full border border-white/10" />
          <div className="absolute -inset-10 rounded-full border-t-2 border-[#C2B4A3]/60 animate-spin-slow" />
          <img src="/logo.png" alt="Idol Dream Homes" className="w-16 h-16 mx-auto opacity-95" />
        </div>
      </div>

      {/* Bottom caption */}
      <div className="absolute bottom-8 left-0 right-0 text-center">
        <p className="text-[13px] text-white/80 tracking-wide">
          Crafting your experience
          <span className="inline-flex ml-2 gap-1 align-[-2px]">
            <span className="w-1.5 h-1.5 bg-white/70 rounded-full animate-bounce [animation-delay:-0.2s]" />
            <span className="w-1.5 h-1.5 bg-white/70 rounded-full animate-bounce [animation-delay:0s]" />
            <span className="w-1.5 h-1.5 bg-white/70 rounded-full animate-bounce [animation-delay:0.2s]" />
          </span>
        </p>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes bar { 0% {transform: translateX(-130%);} 50% {transform: translateX(10%);} 100% {transform: translateX(120%);} }
        .animate-spin-slow { animation: spin 2.4s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
