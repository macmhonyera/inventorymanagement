import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function POST(request) {
  try {
    const {
      transferStockQty,
      givingWarehouseId,
      receivingWarehouseId,
      referenceNumber,
      notes,
      itemId,
    } = await request.json();
    const adjustments = await db.transferStockAdjustment.create({
      data: {
        transferStockQty: parseInt(transferStockQty),
        givingWarehouseId,
        receivingWarehouseId,
        referenceNumber,
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
