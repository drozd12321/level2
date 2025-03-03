import { JSX } from "react";
import { HtagProps } from "./Htag.props";

export const Htag = ({ tag, children }: HtagProps): JSX.Element => {
  return (
    <>
      {tag === "h1" && <h1 className="font-bold text-2xl m-0">{children}</h1>}
      {tag === "h2" && (
        <h2 className="font-semibold text-xl m-0">{children}</h2>
      )}
      {tag === "h3" && <h3 className="font-bold text-lg m-0">{children}</h3>}
    </>
  );
};
