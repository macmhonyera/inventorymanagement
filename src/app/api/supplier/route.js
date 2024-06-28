import { NextResponse } from "next/server";
import db from "@/lib/db"

export async function POST(request) {
  try {
    const { title,phone,email,address,contactPerson,supplierCode,paymentsTerms, taxID,notes } = await request.json();
    const supplier = await db.supplier.create({
      data: { title,phone,email,address,contactPerson,supplierCode,paymentsTerms, taxID,notes }
    });
    //console.log(supplier)
    return NextResponse.json(supplier);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error, message: "Failed to create supplier" },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const supplier=await db.supplier.findMany({
      orderBy:{
        createdAt:'desc'
      }
    });
    return NextResponse.json(supplier);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error, message: "Failed to fetch categories" },
      { status: 500 }
    );
  }
}
