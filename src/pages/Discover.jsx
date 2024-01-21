import { useRecoilValue } from "recoil";
import { activeSong, isPlaying } from "../recoil/atoms";

function Discover(){

    const isPlayingVal = useRecoilValue(isPlaying);
    const activeSounVal = useRecoilValue(activeSong);

    return (
        <div>
            <h2 className="font-bold text-6xl text-[#A899FA]">
                Discover songs
            </h2>
        </div>
    ) 
}

export default Discover;