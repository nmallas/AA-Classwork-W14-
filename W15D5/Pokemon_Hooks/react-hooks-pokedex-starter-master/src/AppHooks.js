import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cookies from 'js-cookie';

import LoginPanelHooks from './LoginPanelHooks';
import PokemonBrowserHooks from './PokemonBrowserHooks';
import { PrivateRoute } from './routesUtil';

export default function AppHooks() {
    const [currentUserId, setCurrentUserId] = useState();
    const [loaded, setLoaded] = useState(false);
    const [needLogin, setNeedLogin] = useState(!currentUserId);
    const [pokemon, setPokemon] = useState("");

    function getCurrentUser() {
        const authToken = Cookies.get("token");
        if (authToken) {
          try {
            const payload = authToken.split(".")[1];
            const decodedPayload = atob(payload);
            const payloadObj = JSON.parse(decodedPayload);
            const { data } = payloadObj;
            setCurrentUserId(data.id);
          } catch (e) {
            Cookies.remove("token");
          }
        }
    }

    useEffect(() => {
      updateUser();
    }, [currentUserId]);

    const updateUser = (currentUserId) => {
        setNeedLogin(false);
        setCurrentUserId(currentUserId);
        loadPokemon();
    }

    async function loadPokemon() {
        const response = await fetch(`/api/pokemon`);
        if (response.ok) {
            const pokemon = await response.json();
            setNeedLogin(false);
            setPokemon(pokemon);
            setLoaded(true);
        } else {
            setNeedLogin(true);
            setLoaded(true);
        }
    }

    // function handleCreated(newPokemon) {
    //     setPokemon([...pokemon, newPokemon]);
    // }


    if (!loaded) {
        return null;
    }

    const cProps = {
        pokemon,
        // handleCreated,
        currentUserId
    };
    return (
        <BrowserRouter>
          <Switch>
            <Route path="/login"
              render={props => <LoginPanelHooks {...props} updateUser={updateUser} />} />
            <PrivateRoute path="/"
                          exact={true}
                          needLogin={needLogin}
                          component={PokemonBrowserHooks}
                          cProps={cProps} />
            <PrivateRoute path="/pokemon/:pokemonId"
                          exact={true}
                          needLogin={needLogin}
                          component={PokemonBrowserHooks}
                          cProps={cProps} />
          </Switch>
        </BrowserRouter>
    )
}
