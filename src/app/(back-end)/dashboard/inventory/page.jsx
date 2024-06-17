"use client"

import React from "react";
import FixedHeader from "@/components/dashboard/FixedHeader";
import OptionCards from "../../../../components/dashboard/OptionCards";
import { Boxes, Component, ScrollText, Shirt } from "lucide-react";

export default function Inventory() {
  const optionCards = [
    // {
    //   title: "Item Groups",
    //   description:
    //     "Create multiple variants of the same item using Item Groups",
    //   link: "/new",
    //   linkTitle: "New Item Group",
    //   enabled: true,
    //   icon: Boxes,
    // },
    {
      title: "Items",
      description:
        "Create standalone items and services that you buy and sell.",
      link: "/dashboard/inventory/items/new",
      linkTitle: "New Item",
      enabled: true,
      icon: Shirt,
    },
    {
      title: "Categories",
      description:
        "Bundle different items together and sell them as kits.",
      link: "/dashboard/inventory/categories/new",
      linkTitle: "New Category",
      enabled: true,
      icon: Boxes,
    },
    {
      title: "Brands",
      description:
        "Tweak your item prices for specific contacts or transactions.",
      link: "/dashboard/inventory/brands/new",
      linkTitle: "New Brand",
      enabled: true,
      icon: ScrollText,
    },
    {
      title: "Warehouse",
      description:
        "Tweak your item prices for specific contacts or transactions.",
      link: "/dashboard/inventory/warehouse/new",
      linkTitle: "New Warehouse",
      enabled: true,
      icon: ScrollText,
    },
    {
      title: "Units",
      description:
        "Tweak your item prices for specific contacts or transactions.",
      link: "/dashboard/inventory/units/new",
      linkTitle: "New Unit",
      enabled: true,
      icon: ScrollText,
    }
  ];
  return (
    <div>
      <FixedHeader newLink="/dashboard/inventory/items/new"/>
      <div className="grid grid-cols-1 lg:grid-cols-2 py-8 px-16 gap-4">
        {optionCards.map((card, i) => {
          return <OptionCards optionData={card} key={i} />;
        })}
      </div>
    </div>
  );
}
