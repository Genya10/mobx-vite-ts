import axios from "axios"

export type PropsPosts = {
   userId: number
   id: number
   title: string
   body: string
}

export const getPosts = async()=> {
    const res = await axios<PropsPosts[]>('https://jsonplaceholder.typicode.com/posts')
    return res.data
}
