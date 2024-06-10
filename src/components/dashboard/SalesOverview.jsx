import { CheckCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function SalesOverview() {
  const salesActivity = [
    {
      tittle: "To be Packed",
      number: 10,
      unit: "Qty",
      href: "#",
      color: "text-blue-600",
    },
    {
      tittle: "To be Shipped",
      number: 0,
      unit: "Pkgs",
      href: "#",
      color: "text-red-600",
    },
    {
      tittle: "To be Deliverd",
      number: 0,
      unit: "Pkgs",
      href: "#",
      color: "text-green-600",
    },
    {
      tittle: "To be Invoiced",
      number: 10,
      unit: "Qty",
      href: "#",
      color: "text-orange-600",
    },
  ];
  const InventorySummary=[{
    tittle:"Quantity in Hand",
    number:10
  },
  {
    tittle:"Quantity to be Received",
    number:0
  }
]

  return (
    <div className="bg-blue-50 border-b border-slate-300 px-3 py-4 grid grid-cols-12 gap-4">
      {/* sales activity */}
      <div className=" col-span-8 border-r border-slate-300 p-8">
        <h2 className="mb-6 text-xl text-slate-500">Sales Activity</h2>
        <div className="grid grid-cols-4 gap-4 pr-8">
          {/* card */}
          {salesActivity.map((item,i)=>{
            return(<Link key={i} href={item.href} className="rounded-lg border border-slate-200 hover:border-blue-400 bg-white px-3 py-4 cursor-pointer flex items-center flex-col gap-3 translate-all duration-300">
            <h4 className={`font-semibold text-4xl ${item.color}`}>{item.number}</h4>
            <small>{item.unit}</small>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4" />
              <span className="uppercase text-xs  text-slate-400">{item.tittle}</span>
            </div>
          </Link>)
          })}
          
        </div>
      </div>
      {/* inventory summary */}
      <div className="col-span-4 p-8">
        <h2 className="mb-6 text-xl text-slate-500">Inventory Summary</h2>
        <div>
          {InventorySummary.map((item,i)=>{
            return(
                <div key={i} className="mb-4 rounded-lg border border-slate-200 hover:border-blue-400 bg-white px-4 py-2 cursor-pointer items-center flex justify-between gap-3 translate-all duration-300">
            <div className="flex items-center space-x-2">
              <h2 className="uppercase text-sm text-slate-400">
                {item.tittle}
              </h2>
            </div>
            <h4 className="text-3xl">{item.number}</h4>
          </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}
