import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function POST(request) {
  try {
    const {
      addStockQty,
      referenceNumber,
      receivingWarehouseId,
      notes,
      itemId,
    } = await request.json();
    const adjustments = await db.addStockAdjustment.create({
      data: {
        addStockQty: parseInt(addStockQty),
        referenceNumber,
        receivingWarehouseId,
        notes,
        itemId,
      },
    });
    console.log(adjustments);
    return NextResponse.json(adjustments);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error, message: "Failed to create adjustments" },
      { status: 500 }
    );
  }
}
