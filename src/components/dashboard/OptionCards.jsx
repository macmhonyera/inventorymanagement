
"use client"
import { Shirt } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function OptionCards({ optionData }) {
  const { title, description, link, linkTitle, enabled, icon:Icon } = optionData;

  return (
    <div className="shadow-xl bg-white flex flex-col items-center justify-center gap-4 p-6">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div>
        <Icon strokeWidth="0.5px" className="w-36 h-36" />
      </div>
      <p className="line clap-1">{description}</p>
      {enabled ? (
        <Link
          href={link}
          className="bg-blue-600 py-2  rounded-sm px-3 space-x-1 inline-flex items-center text-white"
        >
          {linkTitle}
        </Link>
      ) : (
        <button className="bg-blue-600 p-1 rounded-sm px-3 space-x-1 inline-flex items-center text-white">
          Enable
        </button>
      )}
    </div>
  );
}
