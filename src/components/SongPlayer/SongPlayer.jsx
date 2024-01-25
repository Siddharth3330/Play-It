import { useEffect, useState } from "react";
import { Player } from "./Player";



export function SongPlayer({song}){
    

    return(
        <Player song={song}/>
    )
}