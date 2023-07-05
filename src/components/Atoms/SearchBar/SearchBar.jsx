const SearchBar = ({ isMenuOpen, getFilteredSeries }) => (
  <div
    className={`relative flex w-full mt-4 items-center h-12 rounded-3xl focus-within:shadow-lg shadow border border-secondary-500  ${
      isMenuOpen ? "hidden md:block" : "block"
    }`}
  >
    <div className="grid place-items-center h-full w-12 text-gray-300">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>

    <input
      className="h-full w-full outline-none text-sm bg-transparent text-gray-400 pr-2"
      type="text"
      id="search"
      placeholder="Search Collections..."
      onChange={(e) => {
        getFilteredSeries(e.target.value);
      }}
    />
  </div>
);

export default SearchBar;
