import React from "react";

const SearchBox = ({onSearching}) => {
  return (
    <div>
      <form className="pa4 black-80">
        <div className="measure center">
          <input
            id="name"
            className="input-reset ba b--black-20 pa2 db w-100"
            type="text"
            placeholder="Start typing..."
            onChange={onSearching}
          />
        </div>
      </form>
    </div>
  );
};
export default SearchBox;
