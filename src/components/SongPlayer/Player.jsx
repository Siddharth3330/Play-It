
export function Player({song}){
    return <audio controls src={song?.hub?.actions[1]?.uri}></audio>
} 