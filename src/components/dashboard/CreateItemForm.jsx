"use client";

import React, { useState } from "react";
import FormHeader from "@/components/dashboard/FormHeader";
import { useForm } from "react-hook-form";
import TextInput from "@/components/FormInputs/TextInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextAreaInput from "@/components/FormInputs/TextAreaInput";
import SelectInput from "@/components/FormInputs/SelectInput";
import { UploadDropzone } from "@uploadthing/react";
import { Pencil } from "lucide-react";
import Image from "next/image";
import toast from "react-hot-toast";

export default function CreateItemForm({categories,units,brands,warehouses,suppliers}) {
  const [imageUrl, setImageUrl] = useState("");


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = React.useState(false);

  async function onSubmit(data) {
    data.imageUrl = imageUrl;
    setLoading(true);
    const baseUrl = "http://localhost:3000";
    try {
      const response = await fetch(`${baseUrl}/api/items`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        //console.log(response);
        setLoading(false);
        toast.success("Item saved successfully")
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
            label="Item Title"
            name="title"
            register={register}
            errors={errors}
            className="w-full"
          />
          <SelectInput
            name="categoryId"
            label="Select the Item Category"
            register={register}
            options={categories}
            className="w-full"
          />

          <TextInput
            label="Item SKU"
            name="sku"
            register={register}
            errors={errors}
            className="w-full"
          />

          <TextInput
            label="Item Barcode"
            name="barcode"
            register={register}
            errors={errors}
            className="w-full"
          />

          <TextInput
            label="Item Quantity"
            name="quantity"
            register={register}
            errors={errors}
            type="number"
            className="w-full"
          />

          <SelectInput
            name="unitId"
            label="Select the Item Unit"
            register={register}
            options={units}
            className="w-full"
          />

          <SelectInput
            name="brandId"
            label="Select the Item brand"
            register={register}
            options={brands}
            className="w-full"
          />

          <TextInput
            label="Cost Price"
            name="costPrice"
            register={register}
            errors={errors}
            type="number"
            className="w-full"
          />

          <TextInput
            label="Unit Price"
            name="unitPrice"
            register={register}
            errors={errors}
            type="number"
            className="w-full"
          />
          <SelectInput
            name="supplierId"
            label="Select the Item Supplier"
            register={register}
            options={suppliers}
            className="w-full"
          />

          <TextInput
            label="Reorder Point"
            name="reOrderPoint"
            register={register}
            errors={errors}
            type="number"
            className="w-full"
          />

          <SelectInput
            name="warehouseId"
            label="Select the Item Warehouse"
            register={register}
            options={warehouses}
            className="w-full"
          />

          <TextInput
            label="Item Weight in Kgs"
            name="weight"
            register={register}
            errors={errors}
            type="number"
            className="w-full"
          />
          <TextInput
            label="Item Dimensions in cm(20 x 30 x 100)"
            name="dimensions"
            register={register}
            errors={errors}
            className="w-full"
          />

          <TextInput
            label="Item Tax Rate in %"
            name="taxRate"
            type="number"
            register={register}
            errors={errors}
            className="w-full"
          />

          <TextAreaInput
            label="Item Description"
            name="description"
            register={register}
            errors={errors}
          />

          <TextAreaInput
            label="Item Notes"
            name="notes"
            register={register}
            errors={errors}
          />
          <div className="col-span-full">
            <div className="flex justify-between items-center mb-4">
              <label
                htmlFor="item-image"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Item Image
              </label>
              {imageUrl && (
                <button
                  onClick={() => setImageUrl("")}
                  type="button"
                  className="flex space-x-2 bg-slate-900 rounded-md shadow text-slate-500"
                >
                  <Pencil className="w-5 h-5" />
                  <span>Change Image</span>
                </button>
              )}
            </div>
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt="item-image"
                width={1000}
                height={667}
                className="w-full h-64 object-cover"
              />
            ) : (
              <UploadDropzone
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                  // Do something with the response
                  setImageUrl(res[0].url);
                }}
                onUploadError={(error) => {
                  // Do something with the error.
                  alert(`ERROR! ${error.message}`);
                }}
              />
            )}
          </div>
        </div>
        <SubmitButton isLoading={loading} title="Item" />
      </form>
  );
}
