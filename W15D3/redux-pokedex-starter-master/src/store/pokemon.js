const LOAD = "pokedex/pokemon/LOAD";
const SET_POKEMON = "pokedex/pokemon/SET"

const load = (pokemon) => {
    return {
        type: LOAD,
        pokemon
    }
}

const setPokemon = (currentPokemon) => ({
    type: SET_POKEMON,
    currentPokemon
})

const pokemonReducer = (state = {}, action) => {
    switch(action.type) {
        case LOAD:
            return { ...state, list: action.pokemon };
        case SET_POKEMON:
            return { ...state, current: action.currentPokemon};
        default:
            return state;
    }
}

export const getPokemon = () => {
    return async (dispatch) => {
        let res = await fetch("/api/pokemon");
        let pokemon = await res.json();
        return dispatch(load(pokemon))
    }
}

export const loadPokemon = (id) => (dispatch) => {
    console.log(id);
    fetch(`/api/pokemon/${id}`)
        .then(res => res.json())
        .then(pokemon => {
            dispatch(setPokemon(pokemon))
        })
}

export default pokemonReducer;
