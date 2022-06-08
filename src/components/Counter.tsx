import React, {useState} from 'react';
import s from "../App.module.css";
import {SettingType} from "../App";

type CounterPropsType ={
    valueMin:number
    valueMax:number
    //setting:SettingType
}

export const Counter = (props:CounterPropsType) => {
    let [counter,setCounter] = useState<number>(props.valueMin)

    const onClickIncHandler = () => {
        setCounter(state => state + 1)
    }
    const onClickResetHandler = () => {
        setCounter(props.valueMin)
    }
    let valueStyle = {
        fontSize: `${22 + 10*counter}px`,
        color:"#6EE4FF",
    }

    let isDisabledRes = counter === props.valueMin
    let isDisabledInc:boolean
    if (counter < props.valueMax){
        isDisabledInc = false
    } else {
        isDisabledInc = true
        valueStyle.color = 'red'
    }

    return (
        <div className={s.wrapper}>
            <div className={s.counter}>
                <div style={valueStyle}>
                    {counter}
                </div>
            </div>
            <div className={s.controlPanel}>
                <button onClick={onClickIncHandler}
                        disabled={isDisabledInc}
                        className={s.increment}>
                    inc
                </button>
                <button onClick={onClickResetHandler}
                        disabled={isDisabledRes}

                        className={s.reset}>
                    reset
                </button>
            </div>
        </div>
    );
};

