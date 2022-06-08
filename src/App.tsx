import React, {useState} from 'react';
import s from './App.module.css'
import {Counter} from "./components/Counter";
import {Settings} from "./components/Settings";


export type SettingType = {
    min:number;
    max:number
}
/*    const [setting,setSetting]= useState<SettingType>(
        {max:1,min:0})*/
export const App = () => {
    const [valueMax, setValueMax] = useState<number>(5)
    const [valueMin, setValueMin] = useState<number>(0)


    const dispatchMax = (value:number) => {
        setValueMax(value)
    }
    const dispatchMin = (value:number) => {
        setValueMin(value)
    }
    return (
        <div className={s.allWrapper}>
            <Counter
                valueMin={valueMin}
                valueMax={valueMax}
            />
            <Settings
                      valueMax={valueMax}
                      valueMin={valueMin}
                      dispatchMax={dispatchMax}
                      dispatchMin={dispatchMin}
            />
        </div>
    );
};

