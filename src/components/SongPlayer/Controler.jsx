import { FaPlayCircle, FaPauseCircle, FaSadCry } from "react-icons/fa";
import { useRecoilState, useRecoilValue } from "recoil";
import { isPlaying } from "../../recoil/atoms";

export function Controler(){

    const [isPlayingVal, setIsPlaying]= useRecoilState(isPlaying);
    //console.log("Is Playing = "+isPlayingVal)


    return(
        <div>{ isPlayingVal ? <FaPauseCircle onClick={() => setIsPlaying(false)}></FaPauseCircle> :
            <FaPlayCircle onClick={() => setIsPlaying(true)}></FaPlayCircle>
            }    
        </div>
    )
}