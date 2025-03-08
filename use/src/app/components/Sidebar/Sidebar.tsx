import React, { DetailedHTMLProps, HTMLAttributes } from "react";

interface SidebarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  et?: string;
}
const Sidebar = ({ ...props }: SidebarProps) => {
  return <div {...props}>Sidebar</div>;
};

export default Sidebar;
