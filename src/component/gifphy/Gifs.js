import React from "react";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";
import GifsItem from "./GifsItem";
const Gifs = ({ gifs, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={gifStyle}>
        {gifs.map(gif => (
          <GifsItem gif={gif} key={gif.id} />
        ))}
      </div>
    );
  }
};
Gifs.propTypes = {
  gifs: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};
const gifStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "0.8rem"
};

export default Gifs;
