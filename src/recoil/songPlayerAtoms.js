import { atom } from "recoil"

export const volume = atom({
    key: "volume",
    default: 1
})

export const seek = atom({
    key: "seek",
    default: 0
})