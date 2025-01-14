import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPicture, fetchFail } from "../actions/index";

const Coffee = ({ picture, isFetching, error, dispatch }) => {
  useEffect(() => {
    dispatch(getPicture());
  }, []);

  if (error) {
    return <h2>You got an error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Fetching picture </h2>;
  }

  const handleClick = () => {
    dispatch(getPicture());
  };
  const handleError = () => {
    dispatch(fetchFail("ERROR ❌"));
  };

  return (
    <div>
      <h2> 😍 </h2>
      <img style={{ borderRadius: "10px" }} src={picture} />

      <div style={{ marginTop: "10px" }} className="getCoffee">
        <button
          style={{ backgroundColor: "lightblue", borderRadius: "4px" }}
          onClick={handleClick}
        >
          Show New Dog
        </button>
        <button
          style={{ backgroundColor: "lightblue", borderRadius: "4px" }}
          onClick={handleError}
        >
          Trigger an Error
        </button>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    picture: state.picture,
    isFetching: state.isFetching,
    error: state.error,
  };
};
export default connect(mapStateToProps)(Coffee);
