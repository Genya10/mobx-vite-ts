import { Counter } from "../counter/Counter"
import { observer } from "mobx-react-lite"
import CounterStore from "../../stores/counter-store"
import cl from './WrapperStyle.module.css'

const counter1 = new CounterStore()
const counter2 = new CounterStore()
const counter3 = new CounterStore()

export const Wrapper = observer(()=> {

    return (
        <div className={cl.wrapper}>
        <div className={cl.counter}> <Counter {...counter1} total={counter1.total}/></div>
        <div className={cl.counter}><Counter {...counter2} total={counter2.total}/></div> 
        <div className={cl.counter}> <Counter {...counter2} total={counter3.total}/></div>
        </div>
    )
})