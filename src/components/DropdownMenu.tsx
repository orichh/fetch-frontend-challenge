import React from "react";
type DropdownProps = {
  arrayOfStrings: Array<string>;
  selectLabel: string;
};

export const DropdownMenu = React.memo(
  ({ arrayOfStrings, selectLabel }: DropdownProps) => {
    return (
      <label>
        {selectLabel}
        <select>
          {arrayOfStrings.map((element: string, idx: number) => {
            return <option key={idx}>{element}</option>;
          })}
        </select>
      </label>
    );
  }
);
