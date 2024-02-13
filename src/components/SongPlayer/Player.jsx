import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { seekTime, volume, songTime } from "../../recoil/songPlayerAtoms"
import { useEffect, useRef } from "react";
import { VolumeBar } from "./VolumeBar";
import { activeSong, isPlaying } from "../../recoil/atoms";

export function Player({song}){

    const audioRef = useRef();
    const [volumeVal, setVolume] = useRecoilState(volume);
    const setSongTime = useSetRecoilState(songTime);
    const seekVal = useRecoilValue(seekTime);
    const isPlayingVal = useRecoilValue(isPlaying);
    const activeSongVal = useRecoilValue(activeSong);

    useEffect(() => {
        audioRef.current.volume = volumeVal;
    }, [volumeVal]);

    useEffect(()=> {
        audioRef.current.currentTime = seekVal; 
        console.log("inside useEffect in seekBar")
    }, [seekVal]);

    
    if(audioRef.current){
            if(isPlayingVal){
                audioRef.current.play();
                console.log("inside useEffect in play")
                console.log(audioRef.current);
                console.log(activeSongVal?.hub?.actions[1]?.uri);
            }
            else{
                audioRef.current.pause();
                console.log("inside useEffect in pause")
            }
    }
    
    
    return(
        <div className="flex flex-row">
            <button onClick={()=>{
                setVolume(0.25);
            }}>Update Vol 0.25</button>
            <audio 
            ref={audioRef}
            src={ activeSongVal?.hub ? activeSongVal?.hub?.actions[1]?.uri : activeSongVal?.attributes?.previews[0]?.url}
            onTimeUpdate={(event)=>{setSongTime(event.target.currentTime)}}></audio>
            <VolumeBar></VolumeBar>
        </div>
    ) 
} 