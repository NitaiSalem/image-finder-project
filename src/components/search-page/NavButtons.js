import { Button } from "@mui/material";

const NavButtons = ({ currPage, changePage, resultImages }) => {
  return (
    <div className={"nav-buttons-container"}>
      <div className="grow">
        <Button
          className="next-button"
          disabled={currPage <= 1}
          onClick={() => {
            changePage(-1);
          }}
        >
          Previous page
        </Button>
      </div>

      {resultImages?.length === 30 && (
        <div className="next-button-container">
          <Button
            className="next-button"
            disabled={resultImages?.length !== 30}
            onClick={() => {
              changePage(1);
            }}
          >
            Next page
          </Button>
        </div>
      )}
    </div>
  );
};

export default NavButtons;
