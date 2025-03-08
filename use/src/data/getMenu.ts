import { dataGt } from "@/app/api/api";
import { MenuItem } from "@/interfaces/menu.interface";

export default async function getMenu(): Promise<MenuItem[]> {
  try {
    const res = await fetch(dataGt.topPages.find, {
      method: "GET",
    });
    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}
