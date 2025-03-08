import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import Menu from "../Menu/Menu";
// import styles from "./Sidebar.module.css";

interface SidebarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  et?: string;
}

const Sidebar = ({ ...props }: SidebarProps) => {
  return (
    <div {...props}>
      <Menu />
    </div>
  );
};

export default Sidebar;
