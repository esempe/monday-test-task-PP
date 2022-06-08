import React, {ChangeEvent, useState} from 'react';
import s from "../App.module.css";
import {SettingType} from "../App";

type SettingsPropsType = {
    valueMax:number
    valueMin:number
    dispatchMax:(value:number)=>void
    dispatchMin:(value:number)=>void
}

export const Settings = (props: SettingsPropsType) => {
/*    let [valueMax, setValueMax] = useState<number>(5)
    let [valueMin, setValueMin] = useState<number>(0)*/

/*    const onSetHandler = () => {
        props.settingDispatch(props.valueMin,valueMax)
        console.log(15)
    }*/
    const onChangeMin = (e: ChangeEvent<HTMLInputElement>) => {
        props.dispatchMin(Number(e.currentTarget.value))
    }
    const onChangeMax = (e: ChangeEvent<HTMLInputElement>) => {
        props.dispatchMax(Number(e.currentTarget.value))
    }


    return (
        <div className={s.wrapper}>
            <div className={s.counter}>
                <div className={s.counterInputs}>
                    <div>Max:</div>
                    <input
                        value={props.valueMax}
                        onChange={onChangeMax}
                        type={"number"}/>
                </div>
                <div className={s.counterInputs}>
                    <div>Min:</div>
                    <input value={props.valueMin}
                           onChange={onChangeMin}
                           type={"number"}/>
                </div>
            </div>
            <div className={s.controlPanel}>
                <button className={s.increment}>
                    set
                </button>
            </div>
        </div>
    );
};

