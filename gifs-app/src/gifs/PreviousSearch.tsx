interface Props {
  title: string;
  data: string[];
}

export const PreviousSearch = ({ title, data }: Props) => {
  return (
    <>
      <div className="previous-search">
        <h2> {title} </h2>

        <ul className="previous-search-list">
          {data.map((gifName) => (
            <li> {gifName} </li>
          ))}
        </ul>
      </div>
    </>
  );
};
