import {atom} from "recoil";

export const isPlaying = atom({
    key: "isPlaying",
    default: false
})

export const activeSong = atom({
    key: "currentSong",
    default: {}
})