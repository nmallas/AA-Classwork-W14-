
const SET_USER = 'pokedex/authentication/SET_USER';

export const login = (email, password) => async dispatch => {
    let res = await fetch(`/api/session`, {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({email, password}),
    })
    let user = await res.json();
    dispatch(setUser(user))
}
export const setUser = user => {
    return {
        type: SET_USER,
        user,
    }
}

export default function reducer(state={}, action ) {
    switch(action.type) {
        case SET_USER:
            return action.user;
        default:
            return state;
    }
}
