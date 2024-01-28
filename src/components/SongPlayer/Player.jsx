import { useRecoilState, useRecoilValue } from "recoil";
import { seek, volume } from "../../recoil/songPlayerAtoms";
import { useEffect, useRef } from "react";
import { VolumeBar } from "./VolumeBar";

export function Player({ song }) {
  const audioRef = useRef();
  const [volumeVal, setVolume] = useRecoilState(volume);
  const seekVal = useRecoilValue(seek);

  useEffect(() => {
    audioRef.current.volume = volumeVal;
  }, [volumeVal]);

  useEffect(() => {
    audioRef.current.currentTime = seekVal;
  }, [seekVal]);

  return (
    <div className="flex flex-row">
      <button
        onClick={() => {
          setVolume(0.25);
        }}
      >
        Make Volume 0.25
      </button>
      <audio ref={audioRef} controls src={song?.hub?.actions[1]?.uri}></audio>
      <VolumeBar></VolumeBar>
    </div>
  );
}
