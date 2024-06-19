"use client";

import React from "react";
import { useForm } from "react-hook-form";
import TextInput from "@/components/FormInputs/TextInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextAreaInput from "@/components/FormInputs/TextAreaInput";
import SelectInput from "@/components/FormInputs/SelectInput";

export default function AddInventoryForm() {
  const branches = [
    {
      label: "Branch A",
      value: "23456fuiopghjk",
    },
    {
      label: "Branch B",
      value: "5678cghjbknluhjh",
    },
    {
      label: "Main A",
      value: "23456fuiopghjk",
    },
    {
      label: "Main B",
      value: "5678cghjbknluhjh",
    },
  ];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = React.useState(false);

  async function onSubmit(data) {
    console.log(data);
    setLoading(true);
    const baseUrl = "http://localhost:3000";
    try {
      const response = await fetch(`${baseUrl}/api/adjustments/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log(response);
        setLoading(false);
        reset();
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-5xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
    >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput
          label="Enter Quantity of Stock to Add"
          type="number"
          name="addStockQty"
          register={register}
          errors={errors}
          className="w-full"
        />
        <SelectInput
          name="receivingWarehouseId"
          label="Select the Warehouse to receive stock"
          register={register}
          options={branches}
          className="w-full"
        />
        <TextAreaInput
          label="Adjustments Notes"
          name="notes"
          register={register}
          errors={errors}
        />
      </div>
      <SubmitButton isLoading={loading} title="Adjustments" />
    </form>
  );
}
