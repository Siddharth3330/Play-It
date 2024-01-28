import { atom } from "recoil"

export const volume = atom({
    key: "volume",
    default: 1
})

export const seekTime = atom({
    key: "seekTime",
    default: 0
})

export const songTime = atom({
    key: "songTime",
    default: 0
})

