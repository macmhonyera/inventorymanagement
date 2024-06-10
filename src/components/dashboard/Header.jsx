import { Bell, ChevronDown, Grip, History, Plus, Settings, Users } from "lucide-react";
import React from "react";
import SearchInput from "../dashboard/SearchInput";
import Image from "next/image";

export default function Header() {
  return (
    <div className="bg-slate-200 h-16 flex items-center justify-between px-8 border-b border-slate-200 ">
      <div className="flex gap-3">
        {/* Recent activities */}
        <button>
          <History className="w-6 h-6" />
        </button>
        {/* Search */}
        <SearchInput />
      </div>
      <div className="flex items-center gap-3">
        {/* plus icon */}
        <div className="pr-2 border-r border-gray-300">
          <button className="bg-blue-600 p-1 rounded-lg">
            <Plus className="text-slate-50 w-4 h-4" />
          </button>
        </div>
        <div className="flex  border-r border-gray-300 space-x-2">
        <button className="hover:bg-slate-200 p-1 rounded-lg">
            <Users className="text-slate-900 w-4 h-4" />
          </button>
          <button className="hover:bg-slate-200 p-1 rounded-lg">
            <Bell className="text-slate-900 w-4 h-4" />
          </button>
          <button className="hover:bg-slate-200 p-1 rounded-lg">
            <Settings className="text-slate-900 w-4 h-4" />
          </button>
        </div>
        {/*  */}
        <div className="flex gap-3">
          <button className="flex items-center"><span>Macmillan</span><ChevronDown className="w-4 h-4"/></button>
          <button><Image src="/user.png" alt="user image" width={96} height={96} className='w-9 h-9 rounded-full border border-slate-900'/></button>
          <button>
            <Grip className="w-6 h-6 text-slate-900"/>
          </button>
        </div>
        {/*  */}
      </div>
    </div>
  );
}
