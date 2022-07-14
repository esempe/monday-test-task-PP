import React, {useState} from 'react';
import s from './App.module.css'
import {Counter} from "./components/Counter";
import {Settings} from "./components/Settings";


export type SettingType = {
    min: number;
    max: number
}
export const App = () => {
    const [valueMax, setValueMax] = useState<number>(0)
    const [valueMin, setValueMin] = useState<number>(0)
    const [error, setError] = useState<string | null>(null)
    const [counter,setCounter] = useState<number>(valueMin)

    const setToLocalstorage = () => {
        localStorage.setItem('MaxValue', JSON.stringify(valueMax))
        localStorage.setItem('MinValue', JSON.stringify(valueMin))
        setCounter(valueMin)
    }
    const dispatchMax = (value: number) => {
        setValueMax(value)
    }
    const dispatchMin = (value: number) => {
        setValueMin(value)
    }
    return (
        <div className={s.allWrapper}>
            <Counter
                counter={counter}
                setCounter={setCounter}
                error={error}
                valueMin={valueMin}
                valueMax={valueMax}
            />
            <Settings
                setError={setError}
                error={error}
                valueMax={valueMax}
                valueMin={valueMin}
                setToLocalstorage={setToLocalstorage}
                dispatchMax={dispatchMax}
                dispatchMin={dispatchMin}
            />
        </div>
    );
};

