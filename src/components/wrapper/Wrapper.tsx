import { Counter } from "../counter/Counter"
import { observer } from "mobx-react-lite"
import CounterStore from "../../stores/counter-store"
import PostsStore from "../../stores/posts-store"
import cl from './WrapperStyle.module.css'
import { useEffect } from "react"

const counter1 = new CounterStore()
const counter2 = new CounterStore()
const counter3 = new CounterStore()

export const Wrapper = observer(()=> {
    const {getPostsAction, posts} = PostsStore

    useEffect(()=> {
        getPostsAction()
    },[])

    if(posts?.state === 'pending'){
        return <div>loading</div>
    }

    if(posts?.state === 'rejected'){
        return <div>error</div>
    }
    
    console.log(posts, 'posts')

    return (
     <h2>
     {posts?.value[0].body}
     </h2>
    )
})

/*
        <div className={cl.wrapper}>
        <div className={cl.counter}> <Counter {...counter1} total={counter1.total}/></div>
        <div className={cl.counter}> <Counter {...counter2} total={counter2.total}/></div> 
        <div className={cl.counter}> <Counter {...counter3} total={counter3.total}/></div>
        </div>
*/