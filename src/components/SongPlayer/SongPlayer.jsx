import { useEffect, useState } from "react";
import { Player } from "./Player";
import { SeekBar } from "./SeekBar";
import { Controler } from "./Controler";



export function SongPlayer({song}){
    

    return(
        <div>
            <SeekBar/>
            <Controler/>
            <Player song={song}/>
        </div>
    )
}