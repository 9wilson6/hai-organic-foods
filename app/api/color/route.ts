import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const allColors = await prisma.product.findMany({
      select: {
        color: true,
      },
    });
    return NextResponse.json(allColors);
  } catch (error) {
    console.log("Error fetching all colors", error);
    return NextResponse.error();
  }
}
