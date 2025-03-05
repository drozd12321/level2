import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./Sidebar.module.css";
interface SidebarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}
const Sidebar = ({ ...props }: SidebarProps) => {
  return <div {...props}>Sidebar</div>;
};

export default Sidebar;
