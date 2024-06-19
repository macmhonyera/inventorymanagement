import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { transferStockQty, receivingWarehouseId,givingWarehouseId, notes } = await request.json();
    const adjustments = { transferStockQty, receivingWarehouseId,givingWarehouseId, notes  };
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
