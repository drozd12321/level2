import { getProducts } from "@/data/getProduct";
import { men } from "@/data/men";
import { notFound } from "next/navigation";
import React from "react";
interface Params {
  type: string;
}
export async function generateStaticParams() {
  return men.map((item) => ({ type: item.route }));
}
const page = async ({ params }: { params: Promise<Params> }) => {
  const { type } = await params;
  const act = men.find((it) => it.route === `${type}`);
  const products = await getProducts();
  if (!act) {
    return notFound();
  }
  return (
    <div>
      Информация о всех курсах {type}
      <div>{JSON.stringify(products)}</div>
    </div>
  );
};

export default page;
