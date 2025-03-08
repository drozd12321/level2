import { Men } from "@/interfaces/menu.interface";
import { TopLevelCategory } from "@/interfaces/page.interface";
import { IoBookSharp } from "react-icons/io5";
import { GrAccessibility } from "react-icons/gr";
import { GrServices } from "react-icons/gr";
import { LiaProductHunt } from "react-icons/lia";
export const men: Men[] = [
  {
    route: "courses/courses",
    icon: GrAccessibility,
    id: TopLevelCategory.Coureses,
    name: "Курсы",
  },
  {
    route: "courses//services",
    icon: GrServices,
    id: TopLevelCategory.Services,
    name: "Книги",
  },
  {
    route: "courses//books",
    icon: IoBookSharp,
    id: TopLevelCategory.Books,
    name: "Книги",
  },
  {
    route: "products",
    icon: LiaProductHunt,
    id: TopLevelCategory.Products,
    name: "Продукты",
  },
];
