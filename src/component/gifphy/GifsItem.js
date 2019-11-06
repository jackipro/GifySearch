import React from "react";

const GifsItem = gif => {
  return (
    <div>
      <h5 className='text-center'>{gif.gif.title}</h5>
      <img alt='' src={gif.gif.images.fixed_width.url}></img>
    </div>
  );
};

export default GifsItem;
