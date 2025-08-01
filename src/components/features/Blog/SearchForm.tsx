import React from "react";
import SearchBox from "@/ui/Common/SearchBox";

const SearchForm = () => {
  return (
    <div className="shadow-1 bg-white rounded-xl">
      <div className="px-4 sm:px-6 py-4.5 border-b border-gray-3">
        <h2 className="font-medium text-lg text-dark">Search</h2>
      </div>

      <div className="p-4 sm:p-6">
        <SearchBox 
          placeholder="Search blog posts..."
          className="w-full"
          showSuggestions={false}
        />
      </div>
    </div>
  );
};

export default SearchForm;
