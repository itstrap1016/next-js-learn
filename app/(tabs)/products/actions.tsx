"use server";

import db from "@/lib/db";

export async function getMoreProducts(page: number) {
  const take = 1;
  const skip = page * take;

  const products = await db.product.findMany({
    select: {
      title: true,
      price: true,
      created_at: true,
      photo: true,
      id: true,
    },
    skip,
    take,
    orderBy: {
      created_at: "desc",
    },
  });
  return products;
}
