export type ArtistClass = {
    id: number,
    nombre_artista: string,
    tipo_musica: string,
    imagen: string
}

export type AlbumClass = {
        id_album:number,
        nombre_album: string,
        fecha_lanzamiento: string,
        activo :boolean
        duracion:string,
        numero_canciones: number,
        imagen: string
}

export type CollectionAlbumsClass = {
    id_cantante: number,
    albumes: AlbumClass[]
}

export type song = {
        id_cancion:number,
        nombre_cancion:string,
        duracion:string,
        numero_pista:number
}

export type CollectionSongsClass = {
    id_album:number,
    canciones: song []
}