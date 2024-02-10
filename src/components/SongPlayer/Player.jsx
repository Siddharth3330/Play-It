import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { seekTime, volume, songTime } from "../../recoil/songPlayerAtoms"
import { useEffect, useRef } from "react";
import { VolumeBar } from "./VolumeBar";
import { isPlaying } from "../../recoil/atoms";

export function Player({song}){

    const audioRef = useRef();
    const [volumeVal, setVolume] = useRecoilState(volume);
    const setSongTime = useSetRecoilState(songTime);
    const seekVal = useRecoilValue(seekTime);
    const isPlayingVal = useRecoilValue(isPlaying);

    useEffect(() => {
        audioRef.current.volume = volumeVal;
    }, [volumeVal]);

    useEffect(()=> {
        audioRef.current.currentTime = seekVal; 
        console.log("inside useEffect in seekBar")
    }, [seekVal]);

    useEffect(() => {
        if(isPlayingVal){
            audioRef.current.play();
            console.log("inside useEffect in play")
        }
        else{
            audioRef.current.pause();
            console.log("inside useEffect in pause")
        }
    }, [isPlayingVal])
    
    return(
        <div className="flex flex-row">
            <button onClick={()=>{
                setVolume(0.25);
            }}>Update Vol 0.25</button>
            <audio 
            ref={audioRef}
            controls
            src={song?.hub?.actions[1]?.uri}
            onTimeUpdate={(event)=>{setSongTime(event.target.currentTime)}}></audio>
            <VolumeBar></VolumeBar>
        </div>
    ) 
} 