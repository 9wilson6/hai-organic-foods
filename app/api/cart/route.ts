import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { productId, userId } = body;

  try {
    const existingCartItem = await prisma.cart.findFirst({
      where: {
        productId,
        userId,
      },
    });
    // if (!existingCartItem) {
    //   const product = await prisma.cart.create({
    //     data: {
    //       productId,
    //       userId,
    //     },
    //   });

    if (existingCartItem) {
      await prisma.cart.delete({
        where: {
          id: existingCartItem.id,
        },
      });
    }
    const product = await prisma.cart.create({
      data: {
        productId,
        userId,
      },
    });
    return NextResponse.json(product);
  } catch (error) {
    console.log("Error adding product to cart", error);
    return NextResponse.error();
  }
}
