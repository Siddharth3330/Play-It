import { useEffect, useState } from "react";
import { Player } from "./Player";
import { SeekBar } from "./SeekBar";



export function SongPlayer({song}){
    

    return(
        <div>
            <SeekBar/>
            <Player song={song}/>
        </div>
    )
}