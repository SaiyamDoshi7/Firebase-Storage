import React, { useState } from "react";

const SearchFilter = ({ setSearch }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    setSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search documents..."
      value={value}
      onChange={handleChange}
      className="search"
    />
  );
};

export default SearchFilter;