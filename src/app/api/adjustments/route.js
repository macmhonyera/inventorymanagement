import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { transferStockQty, receivingBranchId, notes } = await request.json();
    const adjustments = { transferStockQty, receivingBranchId, notes };
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
