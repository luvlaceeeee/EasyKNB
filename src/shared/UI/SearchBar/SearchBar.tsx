import { FC } from 'react';
import { SearchBarProps } from './searchBarTypes';

const SearchBar: FC<SearchBarProps> = ({ placeholder, handlerFn }) => {
  return (
    <div className="relative w-72">
      <input
        type="search"
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 text-sm text-gray-900"
        placeholder={placeholder}
        required
      />
      <button
        type="submit"
        onClick={handlerFn}
        className="absolute right-2.5 bottom-2.5 rounded-lg bg-gray-700 px-3 py-2 text-sm font-medium text-white hover:bg-gray-800"
      >
        <svg
          aria-hidden="true"
          className="h-5 w-5 text-white "
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
