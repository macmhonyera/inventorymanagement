import { NextResponse } from "next/server";
import db from "@/lib/db"

export async function POST(request) {
  try {
    const { title, abbreviation } = await request.json();
    const unit = await db.unit.create({
      data: { title, abbreviation },
    });
    console.log(unit)
    return NextResponse.json(unit);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error, message: "Failed to create unit" },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const units=await db.unit.findMany({
      orderBy:{
        createdAt:'desc'
      }
    });
    return NextResponse.json(units);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error, message: "Failed to fetch categories" },
      { status: 500 }
    );
  }
}
