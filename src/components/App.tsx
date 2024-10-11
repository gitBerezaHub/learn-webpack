import {useState} from 'react'
import classes from './App.module.scss'


export const App = () => {
    const [count, setCount] = useState<number>(0)

    const increment = () => setCount(prev => prev + 1)

    return (
        <div>
            Hello world
            <h1 className={classes.value}>{count}</h1>
            <button className={classes.button} onClick={increment}><span>Increment</span></button>
        </div>
    )
}
