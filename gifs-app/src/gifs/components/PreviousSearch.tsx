interface Props {
  title: string;
  previousSearches: string[];
  onPreviousSearch: (search: string) => void;
}

export const PreviousSearch = ({
  title,
  previousSearches,
  onPreviousSearch,
}: Props) => {
  return (
    <>
      <div className="previous-search">
        <h2> {title} </h2>

        <ul className="previous-search-list">
          {previousSearches.map((gifName, index) => (
            <li
              key={`${gifName}${index}`}
              onClick={() => onPreviousSearch(gifName)}
            >
              {gifName}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
