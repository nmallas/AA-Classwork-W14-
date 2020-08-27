// TODO: Import all of your importing your API util function


export const RECEIVE_GIFS = "RECEIVE_GIFS";

export function receiveGifs(gifs) {
    return {
        type: RECEIVE_GIFS,
        gifs
    }
};


// TODO: Write a thunk action creator
