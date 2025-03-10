import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import Menu from "../Menu/Menu";
import getMenu from "@/data/getMenu";
import logo from "../../../../public/next.svg";
import Image from "next/image";
import { menu } from "../../../../find";
import { findServ } from "../../../../findServices";
interface SidebarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  et?: string;
}

const Sidebar = async ({ ...props }: SidebarProps) => {
  // const menu = await getMenu();

  return (
    <div {...props}>
      <Image src={logo} alt="logo" height={80} width={200} />
      <span>Поиск</span>
      <Menu menuIt={findServ} />
    </div>
  );
};

export default Sidebar;
