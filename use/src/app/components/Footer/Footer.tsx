import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./Footer.module.css";
interface FooterProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}
const Footer = ({ className, ...props }: FooterProps) => {
  return (
    <footer className={`${className} ${styles.fot}`}>
      <div>Lorem ipsum dolor sit amet consectetu</div>
      <div>Ссылка 1</div>
      <div>Ссылка 2</div>
    </footer>
  );
};

export default Footer;
