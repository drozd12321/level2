import React, { DetailedHTMLProps, HTMLAttributes } from "react";
interface HeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  et?: string;
}
const Header = ({ ...props }: HeaderProps) => {
  return <div {...props}>Header</div>;
};

export default Header;
