import { getAlias } from "@/data/getAlias";
import getMenu from "@/data/getMenu";
import { notFound } from "next/navigation";

import React from "react";
interface Params {
  alias: string;
  type: string;
}

export async function generateStaticParams() {
  const menu = await getMenu();
  return menu.flatMap((item) =>
    item.pages.map((page) => ({
      alias: page.alias,
    }))
  );
}
const pageproduct = async ({ params }: { params: Promise<Params> }) => {
  const { alias } = await params;
  const { type } = await params;
  const al = await getAlias(`/${type}/${alias}`);
  if (!al) {
    return notFound();
  }
  return (
    <div>
      <div>{alias}</div>
      <div>{JSON.stringify(al)}</div>
    </div>
  );
};

export default pageproduct;
