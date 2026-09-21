import { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="bg-gray-200 px-20 py-4 flex flex-col items-center">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search something..."
      />

      <p>Searching for: {search}</p>
    </div>
  );
};
export default Search;
