import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { transferStockQty, warehouseId,referenceNumber, notes } = await request.json();
    const adjustments = { transferStockQty, warehouseId,referenceNumber, notes };
    console.log(adjustments)
    return NextResponse.json(adjustments);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error, message: "Failed to create adjustments" },
      { status: 500 }
    );
  }
}
