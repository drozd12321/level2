import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./Tag.module.css";
interface TagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: "s" | "m";
  children: React.ReactNode;
  href?: string;
  color?: "ghost" | "red" | "gray" | "green" | "primary";
}
const Tag = ({ size = "s", children, href, color = "ghost" }: TagProps) => {
  return (
    <div
      className={`${styles.tag}     
    ${color === "primary" && styles.primary}
    ${color === "green" && styles.green}
    ${color === "gray" && styles.gray}
    ${color === "red" && styles.red}
    ${color === "ghost" && styles.ghost}
    ${size === "s" && styles.s}
    ${size === "m" && styles.m}
    `}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};

export default Tag;
