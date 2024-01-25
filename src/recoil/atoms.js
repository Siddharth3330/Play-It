import axios from "axios";
import {atom, selector} from "recoil";

export const isPlaying = atom({
    key: "isPlaying",
    default: false
})

export const activeSong = atom({
    key: "currentSong",
    default: {}
})

export const currentIndex = atom({
    key: "currentIndex",
    default: 0
})

export const curretSongs = atom({
    key: "curretSongs",
    default: []
})

export const topChart = atom({
    key: "topChart",
    default: selector({
    
        key: "topChartSelector",
        get: async () => {
            const res = await axios.get("https://shazam.p.rapidapi.com/charts/track", {headers: {
                'X-RapidAPI-Key': '54553012f6msh0c9fe271c69f569p1625b1jsnf340830b8855'
            }})
            return res.data;
    }})
})