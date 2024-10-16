import {useState} from 'react'
import classes from './App.module.scss'
import {Link, Outlet} from "react-router-dom";
import imgPng from '@/assets/imgPng.png'
import imgJpg from '@/assets/imgJpg.jpg'
import ImgSvg from '@/assets/imgSvg.svg'


export const App = () => {
    const [count, setCount] = useState<number>(0)

    const increment = () => setCount(prev => prev + 1)

    const testTreeShaking = () => {
        if (__PLATFORM__ === 'desktop') {
            return <div>ISDESKTOPPLATFORM</div>
        }
        if (__PLATFORM__ === 'mobile') {
            return <div>ISMOBILEPLATFORM</div>
        }
    }

    // testTreeShaking()

    return (
        <div>
            <div data-testid={'App.DataTestId'}>
                <h1 data-testid={'Platform'}>Platform = {__PLATFORM__}</h1>
            </div>
            <div>
                <img width={100} height={100} src={imgPng} alt=""/>
                <img width={100} height={100} src={imgJpg} alt=""/>
            </div>
            <div>
                <ImgSvg width={100} height={100} color={'green'} />
            </div>
            <Link to={'/about'}>About</Link>
            <br/>
            <Link to={'/shop'}>Shop</Link>

            <h1 className={classes.value}>{count}</h1>
            <button className={classes.button} onClick={increment}><span>Increment</span></button>
            <Outlet/>
        </div>
    )
}
