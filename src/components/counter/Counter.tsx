import counterStore from "../../stores/counter-store"
import { observer } from "mobx-react-lite";

export const Counter = observer(() => {
    const { count, total, increment, decrement } = counterStore;

    return (
        <>
        <button onClick={()=> increment(1)}>+</button>
        <span>{count}</span>
        <button onClick={()=> decrement(1)}>-</button>
        <h1>{total}</h1>
        </>
    )
})