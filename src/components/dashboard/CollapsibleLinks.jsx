import { PlusCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function CollapsibleLinks({href,title}) {
  return (
    <div>
      <Link
        href={href}
        className="flex items-center justify-between pl-8 pr-2 space-x-3 hover:bg-slate-900 transition-all duration-300 py-2 rounded-lg"
      >
        <span className="text-sm">{title}</span>

        <PlusCircle className="w-4 h-4" />
      </Link>
    </div>
  );
}
