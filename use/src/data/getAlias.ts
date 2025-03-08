import { dataGt } from "@/app/api/api";
import { TopPageModal } from "@/interfaces/page.interface";

export async function getAlias(alias: string): Promise<TopPageModal[]> {
  try {
    const res = await fetch(dataGt.topPages.alias, {
      method: "GET",
    });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const menuItems: TopPageModal[] = await res.json();
    const page = menuItems.filter((pag) => pag.alias === alias);
    return page;
  } catch (error) {
    console.error(error);
    return [];
  }
}
