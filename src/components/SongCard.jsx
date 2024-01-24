import { Link } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { activeSong, isPlaying } from "../recoil/atoms";
import { PlayPause } from "./PlayPause";
import { data } from "autoprefixer";

export function SongCard({song, data, i}){

    const activeSongVal = useRecoilValue(activeSong);
    

    return(
        <div className="flex flex-col w-[234px] p-4 bg-opacity-60 bg-[#232D35]
            backdrop-blur-sm cursor-pointer rounded-lg animate-slideup">
            <div className="relative w-full h-52 group">
                <div className={`absolute inset-0 bg-black justify-center bg-opacity-50 items-center group-hover:flex 
                    ${activeSongVal?.title === song.title ? 'flex bg-black bg-opacity-70': 'hidden'}`}>
                    <PlayPause 
                    song = {song}
                    data = {data}
                    i = {i}
                    />    
                </div>
                <img alt="song_image" src={song.images?.coverart} />
            </div>
            <div className="flex flex-col mt-4">
                <p className="font-semibold font-sans text-base text-[#8db7fa] truncate">
                    <Link to={`/songs/${song?.key}`}>
                        {song.title}
                    </Link> 
                </p>
                <p className="font-light font-sans text-sm text-white mt-1 truncate">
                    <Link to={song.artists ? `/artists/${song?.artists[0]?.adamid}` : '/top-artists'}>
                        {song.subtitle}
                    </Link>
                </p>
            </div>
        </div>
    ) 
}