import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { format } from "date-fns";
interface FooterProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  et?: string;
}
const Footer = ({ className, ...props }: FooterProps) => {
  return (
    <footer
      {...props}
      className={`grid grid-cols-[1fr_auto_auto] gap-10 py-6 px-7.5 bg-[--primary] text-[--white]
      text-base leading-5 ${className} `}
    >
      <div>
        Lorem ipsum dolor {format(new Date(), "dd.mm.yyyy")} sit amet consectetu
      </div>
      <div>
        <a
          href="#"
          target="_blank"
          className=" transition-all hover:text-[--gray-light]"
        >
          Пользовательское соглашение
        </a>
      </div>
      <div>
        <a
          href="#"
          target="_blank"
          className="transition-all hover:text-[--gray-light]"
        >
          Политика конфиденциальности
        </a>
      </div>
    </footer>
  );
};

export default Footer;
