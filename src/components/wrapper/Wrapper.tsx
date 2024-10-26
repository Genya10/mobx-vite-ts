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
    const {getPostsAction, posts, isLoading} = PostsStore

    useEffect(()=> {
        getPostsAction()
    },[])

    console.log(posts, 'posts')

    return (
     <>
       <div className={cl.wrapper}>
        <div className={cl.counter}> <Counter {...counter1} total={counter1.total}/></div>
        <div className={cl.counter}> <Counter {...counter2} total={counter2.total}/></div> 
        <div className={cl.counter}> <Counter {...counter3} total={counter3.total}/></div>
        </div>
     </>
    )
})

/*
        <div className={cl.wrapper}>
        <div className={cl.counter}> <Counter {...counter1} total={counter1.total}/></div>
        <div className={cl.counter}> <Counter {...counter2} total={counter2.total}/></div> 
        <div className={cl.counter}> <Counter {...counter3} total={counter3.total}/></div>
        </div>
*/