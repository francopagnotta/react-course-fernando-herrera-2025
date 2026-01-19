import { useRef, useState } from "react";
import { getGifsByQuery } from "../actions/get-gifs-by-query";
import type { Gif } from "../interfaces/gif";

// const gifsCache: Record<string, Gif[]> = {};

export const useGifs = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousSearches, setPreviousSearch] = useState<string[]>([]);
  const gifsCache = useRef<Record<string, Gif[]>>({});

  const handleSearch = async (search: string) => {
    const searchValue = search.trim().toLowerCase();

    if (!searchValue) return;
    if (previousSearches.includes(search)) return;

    setPreviousSearch([search, ...previousSearches].slice(0, 7));

    const gifsFromQuery = await getGifsByQuery(search);
    setGifs(gifsFromQuery);

    gifsCache.current[search] = gifsFromQuery;
  };

  const handlePreviousSearch = async (search: string) => {
    if (gifsCache.current[search]) {
      setGifs(gifsCache.current[search]);
      return;
    }

    const filteredPrevSearches = previousSearches.filter(
      (previousSearch) => previousSearch !== search,
    );

    setPreviousSearch([search, ...filteredPrevSearches].slice(0, 7));
    const gifsFromQuery = await getGifsByQuery(search);
    setGifs(gifsFromQuery);
  };

  return {
    gifs,
    previousSearches,
    setGifs,
    setPreviousSearch,
    handleSearch,
    handlePreviousSearch,
  };
};
