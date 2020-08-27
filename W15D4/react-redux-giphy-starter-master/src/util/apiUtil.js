import { apiKey } from '../config';

// TODO: Define and export a `fetchGifs` function to fetch from the Giphy API

export const fetchGifs = async (searchTerm) => {
    const response = await fetch(`http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=3`);
    const result = await response.json();
    console.log(result.data);
}
