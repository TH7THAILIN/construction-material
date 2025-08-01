"use client";
import React, { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";

interface SearchBoxProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  className?: string;
  showSuggestions?: boolean;
  suggestions?: string[];
  autoFocus?: boolean;
}

const SearchBox: React.FC<SearchBoxProps> = ({
  placeholder = "Search products...",
  onSearch,
  className = "",
  showSuggestions = false,
  suggestions = [],
  autoFocus = false,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [showSuggestionsList, setShowSuggestionsList] = useState(false);
  const router = useRouter();

  // Filter suggestions based on search query
  useEffect(() => {
    if (showSuggestions && searchQuery.length > 0) {
      const filtered = suggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setShowSuggestionsList(filtered.length > 0);
    } else {
      setShowSuggestionsList(false);
    }
  }, [searchQuery, suggestions, showSuggestions]);

  const handleSearch = useCallback(() => {
    if (searchQuery.trim()) {
      if (onSearch) {
        onSearch(searchQuery.trim());
      } else {
        // Default behavior: navigate to search results page
        router.push(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      }
      setShowSuggestionsList(false);
    }
  }, [searchQuery, onSearch, router]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    setShowSuggestionsList(false);
    if (onSearch) {
      onSearch(suggestion);
    } else {
      router.push(`/shop?search=${encodeURIComponent(suggestion)}`);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <div className="flex items-center">
        <div className="relative flex-1">
          <input
            type="search"
            name="search"
            id="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={placeholder}
            autoFocus={autoFocus}
            className="custom-search w-full rounded-l-[5px] bg-gray-1 border border-gray-3 py-2.5 pl-4 pr-4 outline-none ease-in duration-200 focus:border-blue focus:ring-2 focus:ring-blue/20"
          />
          
          {/* Suggestions dropdown */}
          {showSuggestionsList && (
            <div className="absolute top-full left-0 right-0 bg-white border border-gray-3 border-t-0 rounded-b-[5px] shadow-lg z-50 max-h-48 overflow-y-auto">
              {filteredSuggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="w-full text-left px-4 py-2 hover:bg-gray-1 transition-colors duration-150 border-b border-gray-2 last:border-b-0"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}
        </div>
        
        <button
          onClick={handleSearch}
          type="button"
          id="search-btn"
          aria-label="Search"
          className="flex items-center justify-center w-12 h-11 rounded-r-[5px] bg-blue text-white border border-blue border-l-0 ease-out duration-200 hover:bg-blue-dark"
        >
          <svg
            className="fill-current"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.25 1.5C4.52208 1.5 1.5 4.52208 1.5 8.25C1.5 11.9779 4.52208 15 8.25 15C9.92203 15 11.4573 14.3735 12.6431 13.3431L15.6431 16.3431C15.9734 16.6734 16.5266 16.6734 16.8569 16.3431C17.1872 16.0128 17.1872 15.4596 16.8569 15.1293L13.8569 12.1293C14.8873 10.9435 15.5138 9.40826 15.5138 7.73623C15.5138 4.00831 12.4917 0.986229 8.76381 0.986229C5.03589 0.986229 2.01381 4.00831 2.01381 7.73623C2.01381 11.4641 5.03589 14.4862 8.76381 14.4862C10.436 14.4862 11.9713 13.8597 13.1571 12.8293L16.1571 15.8293C16.4874 16.1596 17.0406 16.1596 17.3709 15.8293C17.7012 15.499 17.7012 14.9458 17.3709 14.6155L14.3709 11.6155C15.4013 10.4297 16.0278 8.89448 16.0278 7.22245C16.0278 3.49453 12.0057 0.472443 8.27778 0.472443C4.54986 0.472443 1.52778 3.49453 1.52778 7.22245C1.52778 10.9504 4.54986 13.9725 8.27778 13.9725Z"
              fill=""
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
