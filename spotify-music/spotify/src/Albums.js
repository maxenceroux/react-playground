import React from 'react'

import Album from './Album'

function Albums({ albums }) {
    return (
        <section className="albums">
            {albums.map(album => (
                <Album key={album.album.id} album={album} />
            ))}
        </section>
    )
}

export default Albums