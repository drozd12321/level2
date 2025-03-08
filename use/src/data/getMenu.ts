import { dataGt } from "@/app/api/api";
import { MenuItem } from "@/interfaces/menu.interface";

export default async function getMenu(): Promise<MenuItem[]> {
  try {
    const res = await fetch(dataGt.topPages.find, {
      method: "GET",
    });
    const data = await res.json();
    const menuItemsWithGroupId: MenuItem[] = data.map((item: MenuItem) => ({
      ...item,
    }));
    return menuItemsWithGroupId;
  } catch (error) {
    console.error(error);
    return [];
  }
}
