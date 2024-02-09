import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import { useRecoilState, useRecoilValue } from "recoil";
import { isPlaying } from "../../recoil/atoms";

export function Controler(){

const isPlayingVal= useRecoilValue(isPlaying);
//console.log("Is Playing = "+isPlayingVal)

    return(
        <div>{ isPlayingVal ? <FaPauseCircle></FaPauseCircle> :
               <FaPlayCircle></FaPlayCircle>
            }    
        </div>
    )
}