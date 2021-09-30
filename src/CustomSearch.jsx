import React, { useRef } from "react";

function CustomSearch({
  labelName,
  type,
  search,
  onSearch,
  children,
  isFocused,
}) {
  const inputRef = useRef(true);

  return (
    <div>
      <label htmlFor={labelName}>{children}</label>
      <input
        ref={inputRef}
        autoFocus={isFocused}
        id={labelName}
        type={type}
        value={search}
        onChange={onSearch}
      />
    </div>
  );
}

export default CustomSearch;
