import { getAlias } from "@/data/getAlias";
import getMenu from "@/data/getMenu";
import React from "react";
interface Params {
  alias: string;
}

export async function generateStaticParams() {
  const menu = await getMenu();
  return menu.flatMap((item) =>
    item.pages.map((page) => ({ alias: page.alias }))
  );
}
const page = async ({ params }: { params: Promise<Params> }) => {
  const { alias } = await params;
  const al = await getAlias(alias);
  return (
    <div>
      <div>{alias}</div>
      <div>{JSON.stringify(al)}</div>
    </div>
  );
};

export default page;
