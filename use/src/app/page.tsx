"use client";
import { DetailedHTMLProps, HTMLAttributes, useState } from "react";
import Button from "../components/UI/Button/Button";
import { Htag } from "../components/UI/Htag/Htag";
import Ptags from "../components/UI/Ptags/Ptags";
import Rating from "../components/UI/Rating/Rating";
import Tag from "../components/UI/Tag/Tag";
import Link from "next/link";
export default function Home() {
  const [rating, setRat] = useState<number>(4);
  return (
    <main>
      <Htag tag="h1">DROZD</Htag>
      <Button appireans="ghost" className="text-red-400" arrow="right">
        Кнопка
      </Button>
      <Button appireans="primary" arrow="down">
        Click
      </Button>
      <Ptags size="24">Большой</Ptags>
      <Ptags size="20"> Средний</Ptags>
      <Ptags size="16">Маленький</Ptags>
      <Tag size="m" color="primary">
        FFFF
      </Tag>
      <Tag size="s" color="green">
        FFFF
      </Tag>
      <Tag color="red">FFFF</Tag>
      <Tag size="m" color="primary">
        <Link href={"/fff"}>123</Link>
      </Tag>

      <Tag size="m" color="ghost">
        FFFF
      </Tag>
      <Rating rating={rating} isEdit={true} setRating={setRat} />
    </main>
  );
}
