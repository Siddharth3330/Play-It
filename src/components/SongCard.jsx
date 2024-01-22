import { Link } from "react-router-dom";

export function SongCard({song, i}){
    return <div>
        {song.title}
        <img alt="song_image" src={song.images?.coverart} />
    </div>
}