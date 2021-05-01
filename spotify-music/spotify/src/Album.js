import React from "react";
import "./Album.css";

function Album({ album }) {
    return (
        <div className="album">
            <div>{album.album.name}</div>
            <div>{album.album.artists[0].name} </div>
            <img src={album.album.images[0].url} />
        </div>
    );
}

export default Album;