import { useRef } from "react";

const SearchForm = () => {
  const inputRef = useRef();

  const handleSearch = () => {
    alert(inputRef.current.value);
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <h2 className="text-xl font-bold">Search Form</h2>

      <input
        ref={inputRef}
        type="text"
        placeholder="Enter search..."
        className="border px-4 py-2 rounded"
      />

      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Search
      </button>
    </div>
  );
};

export default SearchForm;