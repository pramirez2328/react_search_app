import React from "react";

function CustomSearch({
  labelName,
  customLabel,
  type,
  search,
  onSearch,
  children,
}) {
  return (
    <div>
      <label htmlFor={labelName}>{children}</label>
      <input id={labelName} type={type} value={search} onChange={onSearch} />
    </div>
  );
}

export default CustomSearch;
