import { setPokemons, startLoadingPokemons } from "./pokemonSlice"


export const getPokemons = ( page = 0) => {
    return async ( dispatch, getState ) => {
        dispatch( startLoadingPokemons() );

        // TODO: realizar la peticion http

        // dispatch(setPokemons)
    }
}