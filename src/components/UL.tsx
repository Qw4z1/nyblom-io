import { DetailedHTMLProps, HTMLAttributes } from "react";

const UL: React.FC<
  DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>
> = (props) => {
  return <ul className="space-y-2 list-disc list-inside">{props.children}</ul>;
};

export default UL;
