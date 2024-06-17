import { NextResponse } from "next/server";

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
    const data = await request.json();

    console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error, message: "Failed to create items" },
      { status: 500 }
    );
  }
}
