import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./Footer.module.css";
import { format } from "date-fns";
interface FooterProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}
const Footer = ({ className, ...props }: FooterProps) => {
  return (
    <footer className={`${className} ${styles.fot}`}>
      <div>
        Lorem ipsum dolor {format(new Date(), "dd.mm.yyyy")} sit amet consectetu
      </div>
      <div>
        <a href="#" target="_blank">
          Пользовательское соглашение
        </a>
      </div>
      <div>
        <a href="#" target="_blank">
          Политика конфиденциальности
        </a>
      </div>
    </footer>
  );
};

export default Footer;
