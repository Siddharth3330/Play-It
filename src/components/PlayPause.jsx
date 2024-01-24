import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";
import { activeSong, currentIndex, curretSongs, isPlaying } from "../recoil/atoms";
import { FaPauseCircle, FaPlayCircle} from 'react-icons/fa';

export function PlayPause({ song, i, data }){
    const [activeSongVal, setActiveSong] = useRecoilState(activeSong)
    const [currentIndexVal, setCurrentIndex] = useRecoilState(currentIndex)
    const [currentSongsVal, setCurrentSongs] = useRecoilState(curretSongs)

    //Imp lesson useState can only be initailized inside fn component then I can use it in consomised fn as eg fnPlay()
    const [isPlayingVal, setIsPlaying] = useRecoilState(isPlaying)

    function fnPause(){
        setIsPlaying(false);
        console.log("pause logic ran and isPlaying updated");

    }

    function fnPlay(){
        setActiveSong(song);
        setCurrentIndex(i);

        if(data?.properties){
            console.log("data found");
            console.log(data);
            setCurrentSongs(data?.tracks);
        }
        
        setIsPlaying(true);
        console.log("play logic ran and isPlaying updated");
        
    }

    return((song?.title === activeSongVal?.title && isPlayingVal) ?
    (<FaPauseCircle size={27} className='text-gray-300' onClick={fnPause}/>)
    : (<FaPlayCircle size={27} className='text-gray-300' onClick={fnPlay}/>))
} 