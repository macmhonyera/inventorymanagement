import React from "react";
import FormHeader from "@/components/dashboard/FormHeader";
import CreateItemForm from "@/components/dashboard/CreateItemForm";
import { getData } from "@/lib/getData";

export default async function NewItem() {

  const [categories, units, brands, suppliers, warehouses] = await Promise.all([
    getData('categories'),
    getData('units'),
    getData('brands'),
    getData('supplier'),
    getData('warehouse'),
  ]);

  return (
    <div>
      {/* header */}
      <FormHeader title="New Item" href="/dashboard/inventory" />
      {/* form */}
      <CreateItemForm
        categories={categories}
        units={units}
        brands={brands}
        warehouses={warehouses}
        suppliers={suppliers}
      />
    </div>
  );
}
