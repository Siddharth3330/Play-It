import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import { activeSong, isPlaying, topChart } from "../recoil/atoms";
import { data } from "autoprefixer";
import { SongCard } from "../components/SongCard";
import { SongPlayer } from "../components/SongPlayer/SongPlayer";

function Discover(){

    const isPlayingVal = useRecoilValue(isPlaying);
    console.log(isPlayingVal)
    const activeSongVal = useRecoilValue(activeSong);
    const topChartVal= useRecoilValueLoadable(topChart);

    if(topChartVal.state === "loading"){
        console.log("loading");
    }
    if(topChartVal.state === "hasValue"){
        console.log("hasValue");
    }

    return (
        <div className="flex flex-col">
            <h2 className="font-bold text-6xl text-[#A899FA]">
                Discover
            </h2>
            <div className="flex flex-wrap justify-center sm:justify-start gap-8">
            { 
            topChartVal.state === "hasValue" ? 
                topChartVal.contents?.tracks.map((song, i)=> {
                    return <SongCard 
                            key={song.key}
                            song={song}
                            i={i}
                            data= {topChartVal.contents}
                            />    
                }) 
            : ""
            }
            </div>
            <div>
            { 
            topChartVal.state === "hasValue" ?
                <SongPlayer song= {topChartVal.contents?.tracks[1]}/>
            : ""
            }    
            </div>
        </div>
    ) 
}

export default Discover;