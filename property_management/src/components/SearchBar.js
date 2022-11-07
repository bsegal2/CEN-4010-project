import React, {useState} from 'react'


function SearchBar() {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search property"
        onChange={handleChange}
        value={searchInput} />
    </div>
  )
}

export default SearchBar
