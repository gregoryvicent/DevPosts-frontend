import {StaticImageData} from "next/image"

export type PostsComponentTypes = {
    img: string | StaticImageData,
    title: string,
    date: string
}
