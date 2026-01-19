import { GifList } from "./gifs/components/GifList";
import { PreviousSearch } from "./gifs/components/PreviousSearch";
import { useGifs } from "./gifs/hooks/useGifs";
import { Header } from "./shared/Header";
import { SearchBar } from "./shared/SearchBar";

export const GifsApp = () => {
  const { gifs, previousSearches, handleSearch, handlePreviousSearch } = useGifs();

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
