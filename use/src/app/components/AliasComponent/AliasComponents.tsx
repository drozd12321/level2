import { TopPageModal } from "@/interfaces/page.interface";
import React from "react";
interface AliasProps {
  al: TopPageModal;
  alias: string;
  type: string;
}
const AliasComponents = ({ al, alias, type }: AliasProps) => {
  return (
    <div>
      <p>{type}</p>
      <p>{alias}</p>
      {JSON.stringify(al)}
    </div>
  );
};

export default AliasComponents;
