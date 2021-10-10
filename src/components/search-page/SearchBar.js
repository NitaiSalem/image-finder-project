import { Button, TextField } from "@mui/material";

const SearchBar = ({ onTextChange, search, moveToHomePage }) => (
  <div className="search-keys-container">
    <TextField
      className="text-field"
      onChange={onTextChange}
      label="Search"
      placeholder={"Enter search image text"}
      variant="standard"
      onKeyUp={({ code }) => {
        if (code === "Enter") {
          search();
        }
      }}
    />
    <Button className="search-button" onClick={search} variant="contained">
      Search
    </Button>
    <Button className="back-button" variant="outlined" onClick={moveToHomePage}>
      Back
    </Button>
  </div>
);

export default SearchBar;
