import React from 'react';


const GifsList = ({gifs}) => (
  <div>
    {gifs.map(gif => ( <img alt={gif} key={gif} src={gif} /> ))}
  </div>
);

export default GifsList;
