import { Link } from "react-router-dom";

export function SongCard({song, i}){
    return <div className="flex flex-col w-[#234px] p-4 bg-opacity-60 bg-[#232D35]
    backdrop-blur-sm cursor-pointer rounded-lg animate-slideup">
        <div className="relative w-full h-52 group">
            <div className="absolute bg-black"></div>
            <img alt="song_image" src={song.images?.coverart} />
        </div>
        <div className="flex flex-col mt-4">
            <p className="font-semibold font-sans text-base text-[#8db7fa] truncate">
                <Link to={`song/${song.key}`}>{song.title}</Link> 
            </p>
            <p className="font-light font-sans text-sm text-white mt-1">
                <Link to={song.artists ? `/artists/${song?.artists[0]?.adamid}` : '/top-artists'}>
                    {song.subtitle}
                </Link>
            </p>
        </div>
    </div>
}