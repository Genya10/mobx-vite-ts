import counterStore from "../../stores/counter-store"
import { observer } from "mobx-react-lite"

type Props = {
    increment:(value:number)=> void
    decrement:(value:number)=> void
    count: number
    total: number
}

export const Counter = ({increment,decrement,count,total}:Props) => {
    //const { count, total, increment, decrement } = counterStore;

    return (
        <>
        <button onClick={()=> increment(1)}>+</button>
        <span>{count}</span>
        <button onClick={()=> decrement(1)}>-</button>
        <h1>{total}</h1>
        </>
    )
}