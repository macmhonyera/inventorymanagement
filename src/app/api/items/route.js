import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function POST(request) {
  // title,
  // categoryId,
  // sku,
  // barcode,
  // brandId,
  // qty,
  // unitId,
  // warehouseId,
  // sellingPrice,
  // buyingPrice,
  // dimensions,
  // weight,
  // supplierId,
  // reorderPoint,
  // imageUrl,
  // taxRate,
  // notes,
  // description,
  try {
    const {
      name,
      description,
      categoryId,
      sku,
      barcode,
      unitId,
      brandId,
      supplierId,
      unitPrice,
      costPrice,
      reOrderPoint,
      location,
      imageUrl,
      weight,
      dimentions,
      taxRate,
      notes,
    } = await request.json();
    const item = await db.item.create({
      data: {
        name,
        description,
        categoryId,
        sku,
        barcode,
        unitId,
        brandId,
        supplierId,
        unitPrice,
        costPrice,
        reOrderPoint,
        location,
        imageUrl,
        weight,
        dimentions,
        taxRate,
        notes,
      },
    });

   // console.log(item);
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error, message: "Failed to create items" },
      { status: 500 }
    );
  }
}
