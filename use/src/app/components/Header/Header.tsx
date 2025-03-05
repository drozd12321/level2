import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./Header.module.css";
interface HeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}
const Header = ({ ...props }: HeaderProps) => {
  return <div {...props}>Header</div>;
};

export default Header;
