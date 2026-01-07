import { useEffect, useState, type KeyboardEvent } from "react";

interface Props {
  buttonText: string;
  placeholder: string;
  onSearch: (search: string) => void;
}

const KEY_PRESS_ENTER = "Enter";

export const SearchBar = ({ buttonText, placeholder, onSearch }: Props) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    const timeOut = setTimeout(() => {
      onSearch(search);
    }, 700);

    return () => {
      clearTimeout(timeOut);
    };
  }, [search, onSearch]);

  const handleSearch = () => {
    onSearch(search);
    setSearch("");
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === KEY_PRESS_ENTER) {
      handleSearch();
    }
  };

  return (
    <>
      <div className="search-bar-container">
        <h1>{search}</h1>
        <input
          type="text"
          placeholder={placeholder}
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button onClick={() => handleSearch()}>{buttonText}</button>
      </div>
    </>
  );
};
