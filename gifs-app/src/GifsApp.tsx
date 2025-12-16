import { mockGifs } from "./mocks/gifs.mock";
import { Header } from "./shared/Header";
import { SearchBar } from "./shared/SearchBar";
import { PreviousSearch } from "./gifs/PreviousSearch";
import { GifList } from "./gifs/GifList";

const previousSearchMock: string[] = ["Goku 1", "Goku 2", "Goku 3"];

export const GifsApp = () => {
  return (
    <>
      <Header title="Search Gif" subtitle="Discover Gifs" />

      <div className="search-container">
        <SearchBar buttonText="Search" placeholder="Search Gifs" />

        <PreviousSearch title="Previous Search" data={previousSearchMock} />
      </div>

      <div className="gifs-container">
        <GifList gifs={mockGifs} />
      </div>
    </>
  );
};  
