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
      title,
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
    const items = await db.item.create({
      data: {
        title,
        description,
        categoryId,
        sku,
        barcode,
        unitId,
        brandId,
        supplierId,
        unitPrice: parseFloat(unitPrice),
        costPrice: parseFloat(unitPrice),
        reOrderPoint: parseInt(reOrderPoint),
        location,
        imageUrl,
        weight:parseFloat(weight),
        dimentions,
        taxRate:parseFloat(taxRate),
        notes,
      },
    });

   // console.log(item);
    return NextResponse.json(items);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error, message: "Failed to create items" },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const items=await db.item.findMany({
      orderBy:{
        createdAt:'desc'
      }
    });
    return NextResponse.json(items);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error, message: "Failed to fetch categories" },
      { status: 500 }
    );
  }
}
