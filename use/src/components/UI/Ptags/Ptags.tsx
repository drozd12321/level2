import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./Ptags.module.css";
interface PtagsProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  size?: "16" | "20" | "24";
  children: React.ReactNode;
}
const Ptags = ({ size = "16", children }: PtagsProps) => {
  return (
    <>
      <p
        className={`${styles.ptag} ${size === "20" && styles.ptag20} ${
          size === "24" && styles.ptag24
        }`}
      >
        {children}
      </p>
    </>
  );
};

export default Ptags;
