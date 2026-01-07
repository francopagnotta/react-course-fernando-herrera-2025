import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query";
import { GifList } from "./gifs/components/GifList";
import { PreviousSearch } from "./gifs/components/PreviousSearch";
import type { Gif } from "./gifs/interfaces/gif";
import { Header } from "./shared/Header";
import { SearchBar } from "./shared/SearchBar";
import { useState } from "react";

export const GifsApp = () => {
  const [previousSearches, setPreviousSearch] = useState<string[]>([]);
  const [gifs, setGifs] = useState<Gif[]>([]);

  const handleSearch = async (search: string) => {
    const searchValue = search.trim().toLowerCase();

    if (!searchValue) return;
    if (previousSearches.includes(search)) return;

    setPreviousSearch([search, ...previousSearches].slice(0, 7));

    const gifsFromQuery = await getGifsByQuery(search);
    setGifs(gifsFromQuery);
  };

  const handlePreviousSearch = async (search: string) => {
    setPreviousSearch([search, ...previousSearches].slice(0, 7));
    const gifsFromQuery = await getGifsByQuery(search);
    setGifs(gifsFromQuery);
  };

  return (
    <>
      <Header title="Search Gif" subtitle="Discover Gifs" />

      <div className="search-container">
        <SearchBar
          buttonText="Search"
          placeholder="Search Gifs"
          // onSearch={(search: string) => handleSearch(search)}
          onSearch={handleSearch} // same as above, shorter version because params have the same data type, both are strings
        />

        <PreviousSearch
          title="Previous Search"
          previousSearches={previousSearches}
          // onPreviousSearch={(search: string) => handlePreviousSearch(search)}
          onPreviousSearch={handlePreviousSearch} // same as above, shorter version because params have the same data type, both are strings
        />
      </div>

      <div className="gifs-container">
        <GifList gifs={gifs} />
      </div>
    </>
  );
};
