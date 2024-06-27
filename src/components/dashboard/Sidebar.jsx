"use client";
import {
  BarChart4,
  ChevronLeft,
  FolderOpen,
  Home,
  PlusCircle,
  ShoppingBag,
  ShoppingBasket,
  ShoppingCart,
  Workflow,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SubscriptionCard from "@/components/dashboard/SubscriptionCard";
import SidebarDropdownLink from "@/components/dashboard/SidebarDropdownLink";

export default function Sidebar() {
  const inventoryLinks = [
    {
      title: "Items",
      href: "/dashboard/inventory",
    },
    {
      title: "Categories",
      href: "/dashboard/inventory",
    },
   
    {
      title: "Brands",
      href: "/dashboard/inventory",
    },
    {
      title: "Units",
      href: "/dashboard/inventory",
    },
    {
      title: "Warehouse",
      href: "/dashboard/inventory",
    },
    {
      title: "Inventory Adjustments",
      href: "/dashboard/inventory",
    },
    {
      title: "Supplier",
      href: "/dashboard/inventory",
    }
  ];
  const salesLinks = [
    {
      title: "Customers",
      href: "#",
    },
    {
      title: "Sales Orders",
      href: "#",
    },
    {
      title: "Packages",
      href: "#",
    },
    {
      title: "Shipments",
      href: "#",
    },
    {
      title: "Invoices",
      href: "#",
    },
    {
      title: "Sales Receipts",
      href: "#",
    },
    {
      title: "Payments Received",
      href: "#",
    },
    {
      title: "Sales Returns",
      href: "#",
    },
    {
      title: "Credit Notes",
      href: "#",
    },
  ];

  return (
    <div className="w-60 min-h-screen bg-slate-800 text-slate-50 justify-between fixed">
      {/* Toppart */}

      <div className="flex flex-col">
        <div className="flex bg-slate-50 space-x-2 items-center py-1 px-1">
          <Image src="/logoo.png" alt="logo" width={355} height={120} />
        </div>
        {/* Logo */}
      </div>
      {/* Links */}
      <nav className="flex flex-col gap-3 px-3 py-6">
        <Link className="flex items-center space-x-2 p-2 bg-[#23aada] rounded-lg" href="/dashboard/home/overview">
          <Home className="w-4 h-4" />
          <span>Home</span>{" "}
        </Link>
        <SidebarDropdownLink
          items={inventoryLinks}
          title="Inventory"
          icon={ShoppingBasket}
        />
        <SidebarDropdownLink
          items={salesLinks}
          title="Sales"
          icon={ShoppingCart}
        />
        <button className="flex items-center space-x-2 p-2">
          <ShoppingBag className="w-4 h-4" />
          <span>Purchases</span>{" "}
        </button>
        <Link className="flex items-center space-x-2 p-2" href="">
          <Workflow className="w-4 h-4" />
          <span>Intergrations</span>{" "}
        </Link>
        <Link className="flex items-center space-x-2 p-2" href="">
          <BarChart4 className="w-4 h-4" />
          <span>Reports</span>{" "}
        </Link>
        <Link className="flex items-center space-x-2 p-2" href="">
          <FolderOpen className="w-4 h-4" />
          <span>Documents</span>{" "}
        </Link>
      </nav>
      <SubscriptionCard />
      <div className="flex flex-col">
        <button className="flex  space-x-2 items-center justify-center py-3 px-2 bg-slate-950">
          <ChevronLeft />
        </button>
      </div>
      {/* Bottonpart */}
    </div>
  );
}
