import React from "react";

const GifRandomItem = gif => {
  return (
    <div style={styleRandom}>
      <img src={gif.gif} alt='' />
    </div>
  );
};
const styleRandom = {
  width: "70%",
  height: "50%",
  margin: "0rem 0rem 0px 6.3rem"
};

export default GifRandomItem;
