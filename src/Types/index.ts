
export type ArtistClass = {
    id: string,
    nombre_artista: string,
    tipo_musica: string,
    imagen: string,
    preset :number
}

export type AlbumClass = {
        id_cantante :ArtistClass['id']
        id_album:string,
        nombre_album: string,
        fecha_lanzamiento: string,
        activo :boolean
        duracion:string,
        numero_canciones: number,
        imagen: string,
        preset:number

}

export type SongClass = {
        id:string,
        nombre_cancion:string,
        duracion:string,
        numero_pista:number
}

export type CollectionSongsClass ={
        id_cantante :ArtistClass['id']
        id_album : AlbumClass['id_album']
        songs : SongClass[]
}
