import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";
import { activeSong, isPlaying } from "../recoil/atoms";
import { FaPauseCircle, FaPlayCircle} from 'react-icons/fa';

export function PlayPause({ song }){
    const activeSongVal = useRecoilValue(activeSong)
    
    //Imp lesson useState can only be initailized inside fn component then I can use it in consomised fn as eg fnPlay()
    const [isPlayingVal, setIsPlaying] = useRecoilState(isPlaying)

    function fnPause(){
        //Pause logic here
    }

    function fnPlay(){
        setIsPlaying(0);
        console.log("play logic ran and isPlaying updated");
        console.log(isPlayingVal);
    }

    return((song?.title === activeSongVal?.title && isPlayingVal) ?
    (<FaPauseCircle size={27} className='text-gray-300' onClick={fnPause}/>)
    : (<FaPlayCircle size={27} className='text-gray-300' onClick={fnPlay}/>))
} 