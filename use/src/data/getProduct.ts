import { dataGt } from "@/app/api/api";
import { ProductModel } from "@/interfaces/product.interface";

export async function getProducts(type: string): Promise<ProductModel[]> {
  try {
    let url = "";
    switch (type) {
      case "courses":
        url = dataGt.topPages.products;
        break;
      case "services":
        url = dataGt.topPages.products;
        break;
      case "books":
        url = dataGt.topPages.products;
        break;
      case "products":
        url = dataGt.topPages.products;
        break;
    }
    const res = await fetch(url, {
      method: "GET",
    });
    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}
