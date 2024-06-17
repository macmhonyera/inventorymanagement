import { HelpCircle, LayoutGrid, List, MoreHorizontal, Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function FixedHeader({newLink}) {
  return (
    <div className="flex justify-between items-center bg-white py-5 px-6">
      <button className="text-2xl">All Items</button>
      <div className="flex gap-4">
        {/* new */}
        <Link href={newLink} className="bg-blue-600 p-1 rounded-sm px-3 space-x-1 flex items-center text-white">
          <Plus className=" w-5 h-5" />
          <span>New</span>
        </Link>
        {/* layout */}
        <div className="flex rounded-md overflow-hidden">
          <button className="bg-gray-400 p-2 border-r"><List className="w-5 h-5"/></button>
          <button className="bg-gray-400 p-2"><LayoutGrid className="w-5 h-5"/></button>
        </div>
        {/* more */}
        <button className="bg-gray-400 p-2 rounded-md"><MoreHorizontal className="w-5 h-5"/></button>
        {/* help */}
        <button className="bg-orange-600 p-2 rounded-md"><HelpCircle w-5 h-5/></button>
      </div>
    </div>
  );
}
