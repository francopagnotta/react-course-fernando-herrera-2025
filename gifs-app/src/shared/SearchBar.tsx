interface Props {
  buttonText: string;
  placeholder: string;
}

export const SearchBar = ({ buttonText, placeholder }: Props) => {
  return (
    <>
      <div className="search-bar-container">
        <input type="text" placeholder={placeholder} />
        <button> {buttonText} </button>
      </div>
    </>
  );
};
