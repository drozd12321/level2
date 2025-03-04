"useClient";
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { GoArrowRight } from "react-icons/go";
import { GoArrowDown } from "react-icons/go";
import styles from "./Button.module.css";
interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
  appireans: "primary" | "ghost";
  arrow?: "right" | "down" | "none";
}

const Button = ({
  appireans,
  arrow = "none",
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`${styles.btn} ${className} ${
        appireans === "primary" ? styles.primary : styles.ghost
      }`}
      {...props}
    >
      {children}
      {arrow != "none" ? (
        <span
          className={`${styles.icn} ${arrow === "down" ? styles.down : ""}`}
        >
          <GoArrowRight />
        </span>
      ) : (
        ""
      )}
    </button>
  );
};

export default Button;
