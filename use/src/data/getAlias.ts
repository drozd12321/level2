import { dataGt } from "@/app/api/api";
import { TopPageModal } from "@/interfaces/page.interface";

export async function getAlias(alias: string): Promise<TopPageModal | null> {
  try {
    console.log(alias);
    const res = await fetch(dataGt.topPages.alias, {
      method: "GET",
    });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const menuItems: TopPageModal[] = await res.json();
    const page = menuItems.find((pag) => `/courses/${pag.alias}` === alias);
    return page || null;
  } catch (error) {
    console.error(error);
    return null;
  }
}
