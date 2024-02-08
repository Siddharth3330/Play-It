import { useRecoilValue, useSetRecoilState } from "recoil"
import { seekTime, songTime } from "../../recoil/songPlayerAtoms"

export function SeekBar(){

    const songTimeVal= useRecoilValue(songTime)
    const setSeekTime = useSetRecoilState(seekTime)
    const time= (val)=>{
        return `${Math.floor(val/60)}:${(`0${Math.floor(val%60)}`).slice(-2)}`;
    }

    return(
        <div>
            <div>{time(songTimeVal)}</div>
            <button onClick={()=>{setSeekTime(songTimeVal -5)}}>-</button>
            <p></p>
            <input type="range" min="0" step="any" max="90" value={songTimeVal} onInput={(event)=>{setSeekTime(event.target.value)}}></input>
            <p></p>
            <button onClick={()=>{setSeekTime(songTimeVal +5)}}>+</button>
            <div>1:30</div>
        </div>
    )
}