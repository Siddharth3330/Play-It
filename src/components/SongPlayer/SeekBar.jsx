import { useRecoilValue, useSetRecoilState } from "recoil"
import { seekTime, songTime } from "../../recoil/songPlayerAtoms"

export function SeekBar(){

    const songTimeVal= useRecoilValue(songTime)
    const setSeekTime = useSetRecoilState(seekTime)

    return(
        <div>
            <button onClick={()=>{setSeekTime(songTimeVal -5)}}>-</button>
            <p></p>
            <input type="range" min="0" step="any" value={songTimeVal} max="90" onInput={(event)=>{setSeekTime(event.target.value)}}></input>
            <p></p>
            <button onClick={()=>{setSeekTime(songTimeVal +5)}}>+</button>
        </div>
    )
}