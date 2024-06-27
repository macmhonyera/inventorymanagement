"use client";

import React from "react";
import FormHeader from "@/components/dashboard/FormHeader";
import TransferInventory from "@/components/dashboard/TransferInventoryForm";
import AddInventoryForm from "@/components/dashboard/AddInventoryForm";
import { Minus, Plus } from "lucide-react";

export default function NewAdjustments() {
  const tabs = [
    {
      title: "Add Stock",
      icon: Plus,
      form: "add",
    },
    {
      title: "Transfer Stock",
      icon: Minus,
      form: "transfer",
    },
  ];
  const [activeForm, setActiveForm] = React.useState("add");

  return (
    <div>
      {/* header */}
      <FormHeader title="New Adjustment" href="/dashboard/inventory" />
      {/* form */}
      <div className="w-full max-w-5xl p-4 bg-white  rounded-lg shadow  mx-auto my-3">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          {tabs.map((tab, i) => {
            const Icon = tab.icon;
            return (
              <li className="mr-2" key={i}>
                <button
                  onClick={() => setActiveForm(tab.form)}
                  className={`${
                    activeForm === tab.form
                      ? "inline-flex items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group"
                      : "inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                  }`}
                >
                  <Icon className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" />{" "}
                  {tab.title}
                </button>
              </li>
            );
          })}
        </ul>
        {activeForm === "add" ? <AddInventoryForm /> : <TransferInventory />}
      </div>
    </div>
  );
}
