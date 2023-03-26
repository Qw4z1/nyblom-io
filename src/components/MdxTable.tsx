import type { FC } from "react";

export type MdxTableProps = {
  headers: string[];
  rows: string[][];
};

function generateHead(titles: string[]) {
  return (
    <thead>
      <tr className="font-bold text-left">
        {titles.map((it) => (
          <th>{it}</th>
        ))}
      </tr>
    </thead>
  );
}

function generateRows(rows: string[][]) {
  return (
    <thead>
      {rows.map((it) => {
        return (
          <tr>
            {it.map((cell, index) => {
              const style = index === 0 ? "font-bold" : "font-medium";
              return <td className={style}>{cell}</td>;
            })}
          </tr>
        );
      })}
    </thead>
  );
}

const MdxTable: FC<MdxTableProps> = ({ headers, rows }) => {
  return (
    <div className="overflow-x-hidden w-full">
      <table className="table-auto w-full border-spacing-2 border-separate border-transparent border">
        {generateHead(headers)}
        {generateRows(rows)}
      </table>
    </div>
  );
};

export default MdxTable;
