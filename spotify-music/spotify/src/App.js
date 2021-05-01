import React, { useEffect, useState } from "react";

import './App.css';
import Login from "./Login"
import Profile from "./Profile"
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from 'spotify-web-api-js';
import Albums from "./Albums";
const spotifyApi = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState();
  const [nowPlaying, setNowPlaying] = useState();
  const [profile, setProfile] = useState();
  const [albums, setAlbums] = useState();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;


    if (_token) {
      setToken(_token);
      spotifyApi.setAccessToken(_token);

    }
    spotifyApi.getMe().then((value) => {
      setProfile(value);
    });
    spotifyApi.getMySavedAlbums().then((value) => {
      setAlbums(value.items);
    });

  }, []);

  console.log(token);
  console.log(albums);

  return (
    <div className="app">{profile ? <h1><Profile profile={profile} /> </h1> :
      <Login />}
      {albums ? <h1><Albums albums={albums} />sd </h1> :
        <div>sqd</div>}

    </div>
  );
}

export default App;
