import React from 'react';
import GifsList from './GifsList';
import SearchBar from './SearchBar';

const App = ({gifs, fetchGifs}) => {
  return (
    <>
      <SearchBar fetchGifs={fetchGifs}/>
      <GifsList gifs={gifs}/>
    </>
  );
};

export default App;
