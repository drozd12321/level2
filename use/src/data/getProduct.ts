import { dataGt } from "@/app/api/api";
import { MenuItem } from "@/interfaces/menu.interface";

export async function getProducts(): Promise<MenuItem[]> {
  try {
    const res = await fetch(dataGt.topPages.products, {
      method: "GET",
    });
    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}
