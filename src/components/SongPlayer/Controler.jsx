import { FaPlayCircle, FaPauseCircle, FaSadCry } from "react-icons/fa";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { activeSong, currentIndex, curretSongs, isPlaying } from "../../recoil/atoms";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";

export function Controler(){

    const [isPlayingVal, setIsPlaying]= useRecoilState(isPlaying);
    const currentSongsVal = useRecoilValue(curretSongs);
    const [currentIndexVal, setCurrentIndex] = useRecoilState(currentIndex);
    const [activeSongVal, setActiveSongVal] = useRecoilState(activeSong);
    //console.log("Is Playing = "+isPlayingVal)

    function nextPlay(){
        setIsPlaying(false);
        setActiveSongVal(currentSongsVal[(currentIndex+1) % currentSongsVal.length]);
        setCurrentIndex((currentIndex+1) % currentSongsVal.length);
        setIsPlaying(true);
    }

    function prevPlay(){
        setIsPlaying(false);
        if(currentIndexVal === 0){
            setActiveSongVal(currentSongsVal[currentSongsVal.length - 1]);
            setCurrentIndex(currentSongsVal.length - 1);
        }
        else{
            setActiveSongVal(currentSongsVal[currentIndex-1]);
            setCurrentIndex(currentIndex-1);
        }
        setIsPlaying(true);
        console.log("prev song clicked");
        console.log(activeSongVal)
    }

    return(
        <div>
            {currentSongsVal.length && <MdSkipPrevious onClick={prevPlay}/>}
            { isPlayingVal ? <FaPauseCircle onClick={() => setIsPlaying(false)}></FaPauseCircle> :
            <FaPlayCircle onClick={() => setIsPlaying(true)}></FaPlayCircle>
            }
            {currentSongsVal.length && <MdSkipNext onClick={nextPlay}/>}    
        </div>
    )
}