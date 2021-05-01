import React, { useEffect, useState } from "react";

import './App.css';
import Login from "./Login"
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState();
  const [nowPlaying, setNowPlaying] = useState();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;


    if (_token) {
      setToken(_token);
      spotifyApi.setAccessToken(_token);

    }
    spotifyApi.getMyCurrentPlaybackState().then((value) => {
      console.log(value);
      // expected output: "foo"
    });
  }, []);

  console.log(token)
  // useEffect(() => {
  //   const _nowPlaying = spotifyApi.getMyCurrentPlaybackState()
  //   if (_nowPlaying) {
  //     setNowPlaying(_nowPlaying);
  //   }
  //   console.log("setNowPlaying", setNowPlaying.item.name);
  // }, []);

  return (
    <div className="app">{token ? <h1>Logged in {token}</h1> :
      <Login />}

    </div>
  );
}

export default App;
