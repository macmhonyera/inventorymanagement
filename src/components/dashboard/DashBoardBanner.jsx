"use client"
import { CreditCard, X } from "lucide-react";
import React from "react";

export default function DashBoardBanner() {

    const [hidden, setHidden]=React.useState(false)

  return (
    <div className={`${hidden?"hidden":"grid grid-cols-12 items-center py-6 px-16 bg-white gap-4 relative"}`}>
      {/* Icon */}
      <div className="col-span-2">
        <CreditCard className="w-16 h-16 text-slate-200" />
      </div>

      {/* Text */}
      <div className="col-span-6">
        <h2 className="font-bold text-2xl">Start accepting online payments</h2>
        <p>
          Businesses are moving towards online payments as they are easy, secure
          and fast. Try them for your business today.
        </p>
      </div>
      {/* Button */}
      <div className="col-span-3">
        <button className="py-2 px-8 uppercase text-sm bg-blue-600 text-white rounded-lg">
          Enable
        </button>
      </div>

      {/* Close Button */}
      <button onClick={()=>setHidden(true)} className="absolute top-4 right-16">
        <X className="text-slate-600 font-extrabold"/>
      </button>
    </div>
  );
}
