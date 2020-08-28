import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import PokemonDetailHooks from './PokemonDetailHooks';
import LogoutButton from './LogoutButton';

const PokemonBrowserHooks = ({pokemon}) => {
    if (!pokemon) {
      return null;
    }
    return (
      <main>
        <LogoutButton />
        <nav>
          {pokemon.map((pokemon) => {
            return (
              <NavLink key={pokemon.name} to={`/pokemon/${pokemon.id}`}>
                <div className="nav-entry">
                  <div
                    className="nav-entry-image"
                    style={{ backgroundImage: `url('${pokemon.imageUrl}')` }}
                  ></div>
                  <h1>{pokemon.name}</h1>
                </div>
              </NavLink>
            );
          })}
        </nav>
        <Route path="/pokemon/:id" component={PokemonDetailHooks} />
      </main>
    );
}

export default PokemonBrowserHooks;
