import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  DetailsHTMLAttributes,
} from "react";
import styles from "./Button.module.css";
interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
  appireans: "primary" | "ghost";
}

const Button = ({ appireans, children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={`${styles.btn} ${className} ${
        appireans === "primary" ? styles.primary : styles.ghost
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
