import React, {useState} from 'react';
import s from './App.module.css'

export const App = () => {
    let [counter,setCounter] = useState<number>(0)

    const onClickIncHandler = () => {
        let result = counter + 1;


        setCounter(result)
    }

    const onClickResetHandler = () => {

        setCounter(0)
    }
    let valueStyle = {
        fontSize: `${22 + 10*counter}px`,
        color:"black",
    }
    console.log(valueStyle.fontSize)

    let isDisabledRes = (counter != 0) ? false : true
    let isDisabledInc:boolean
    if (counter < 5){
        isDisabledInc = false

    } else {
        isDisabledInc = true
        valueStyle.color = 'red'
    }

    return (
        <div className={s.wrapper}>
            <div className={s.counter}>
                <div
                    style={valueStyle}
                   >
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

