import { useRecoilState } from "recoil"
import { volume } from "../../recoil/songPlayerAtoms"
import { BiSolidVolumeMute, BiSolidVolumeFull, BiSolidVolumeLow } from "react-icons/bi";

export function VolumeBar(){

    const [volumeVal, setVolume]= useRecoilState(volume);

    return(
        <div className="lg:flex flex-1 items-center justify-end">
            {volumeVal > 0 && volumeVal <= 0.5 && <BiSolidVolumeLow size={22} color="#000" onClick={()=>{setVolume(0)}}/>}
            {volumeVal <=1 && volumeVal > 0.5 && <BiSolidVolumeFull size={22} color="#000" onClick={()=>{setVolume(0)}}/>}
            {volumeVal == 0 && <BiSolidVolumeMute size={22} color="#000" onClick={()=>{setVolume(0.5)}}/>}
            <input type="range" step="any" min="0" max="1" value={volumeVal} onChange={(event)=>{
                setVolume(event.target.value);
            }}
            className="2xl:w-32 lg:w-32 md:w-32 ml-2 h-1"></input>
        </div>
    )
}