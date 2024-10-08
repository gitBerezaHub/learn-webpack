import {useState} from 'react'
import './App.scss'


export const App = () => {
    const [count, setCount] = useState<number>(0)

    const increment = () => setCount(prev => prev + 1)

    return (
        <div>
            Hello world
            <h1>{count}</h1>
            <button onClick={increment}><span>Increment</span></button>
        </div>
    )
}
