const LOAD = "pokedex/pokemon/LOAD";

const load = (pokemon) => {
    type: LOAD,
    pokemon
}

const pokemonReducer = (state = [], action) => {
    switch(action.type) {
        case(LOAD):
            return [...state, ...action.pokemon]
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

export default pokemonReducer;
