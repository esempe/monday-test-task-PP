import React, {ChangeEvent, useEffect, useState} from 'react';
import s from "../App.module.css";
import {SettingType} from "../App";
import {Button} from "./Button";

type SettingsPropsType = {
    valueMax: number
    valueMin: number
    error: string | null;
    setError: (errorText:string | null)=> void;
    setToLocalstorage: () => void;
    dispatchMax: (value: number) => void
    dispatchMin: (value: number) => void
    //setSettingComplete:(value:boolean)=>void
}

export const Settings = (props: SettingsPropsType) => {
    const [isSetDisabled, setDisableSet] = useState<boolean>(false)
    useEffect(() => {
        let maxValueAsString = localStorage.getItem('MaxValue')
        let minValueAsString = localStorage.getItem('MinValue')
        if (maxValueAsString && minValueAsString) {
            //let newValue = JSON.parse(counterAsString)
            /*            console.log(localStorage.getItem('counterValue'))
                        setCounter(JSON.parse(counterAsString))*/
            props.dispatchMax(JSON.parse(maxValueAsString))
            props.dispatchMin(JSON.parse(minValueAsString))
        }
    }, [])

    const onSetHandler = () => {
        props.setToLocalstorage();
        setDisableSet(true)
        props.setError(null)
    }
    const onChangeMin = (e: ChangeEvent<HTMLInputElement>) => {
        props.dispatchMin(Number(e.currentTarget.value))
        props.setError("Укажите настройки и нажмите SET")
        setDisableSet(false)
    }
    const onChangeMax = (e: ChangeEvent<HTMLInputElement>) => {
        props.dispatchMax(Number(e.currentTarget.value))
        props.setError("Укажите настройки и нажмите SET")
        setDisableSet(false)
    }
    if(props.valueMax === props.valueMin){
        props.setError("Incorrect value")
    } else if (props.valueMax < props.valueMin){
        props.setError("Incorrect value")
    } else if(props.valueMin < 0){
        props.setError("Incorrect value")
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
                <Button disabled={isSetDisabled} onClick={onSetHandler} className={s.increment}>
                    set
                </Button>

            </div>
        </div>
    );
};

