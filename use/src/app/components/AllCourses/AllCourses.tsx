import { Htag } from "@/components/UI/Htag/Htag";
import Ptags from "@/components/UI/Ptags/Ptags";
import Tag from "@/components/UI/Tag/Tag";
import { MenuItem } from "@/interfaces/menu.interface";
import { ProductModel } from "@/interfaces/product.interface";
import Link from "next/link";
import React from "react";

const AllCourses = ({ products }: { products: ProductModel[] }) => {
  return (
    <div className="mr-2">
      <h1>AllCourses</h1>
      <div className="w-full grid gap-7 grid-cols-[1fr_1fr]">
        {products.map((cours) => (
          <div
            key={cours._id}
            className="transition-all ease-linear shadow-lg border border-2 border-solid border-[--primary] rounded-md p-5
            hover:translate-y-5"
          >
            <div
              className="grid grid-rows-[auto_auto_auto_auto_auto] gap-2
            "
            >
              <Link
                href={cours.link}
                className="transition-all hover:text-[--primary]"
              >
                <Htag tag="h1">{cours.title}</Htag>
              </Link>
              <span className="text-[--black]">
                <Ptags size="20">{` ${cours.advanteges}`}</Ptags>
              </span>
              <span className="text-[--black]">
                <Ptags size="20">{` ${cours.description}`}</Ptags>
              </span>
              {cours.characteristic.map((item) => (
                <div key={item.name}>
                  <span className="text-lg font-bold">{item.name}: </span>
                  {item.value} <br />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCourses;
