import React, {useEffect, useState} from 'react';
import s from "../App.module.css";
import {Button} from "./Button";

type CounterPropsType ={
    valueMin:number
    valueMax:number
    counter:number
    setCounter:(value:number)=>void;
    error: string | null;

    //setting:SettingType
}

export const Counter = (props:CounterPropsType) => {

    useEffect(()=>{
        let counterAsString = localStorage.getItem('counterValue')
        if(counterAsString){
            props.setCounter(JSON.parse(counterAsString))
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('counterValue',JSON.stringify(props.counter))
    },[props.counter])

    const onClickIncHandler = () => {
        props.setCounter(props.counter+1)
    }

    const onClickResetHandler = () => {
        props.setCounter(props.valueMin)
    }
    let valueStyle = {
        color:"#6EE4FF",
    }

    let isDisabledRes = props.counter === props.valueMin || props.error !== null
    let isDisabledInc:boolean
    if (props.counter < props.valueMax&& props.error == null){
        isDisabledInc = false
    } else {
        isDisabledInc = true
        valueStyle.color = 'red'
    }
    switch (props.error) {
        case "Укажите настройки и нажмите SET":{
            valueStyle.color = '#6FE0F4'
            break;
        }
        case "Incorrect value":{
            valueStyle.color = 'red'
            break;
        }
    }
    //{counter}
    return (
        <div className={s.wrapper}>
            <div className={s.counter}>
                <div style={valueStyle}>
                    { props.error === null 
                        ? props.counter :
                        <div className={s.error}>{props.error}</div> }
                </div>
            </div>
            <div className={s.controlPanel}>
                <Button onClick={onClickIncHandler}
                        disabled={isDisabledInc}
                        className={s.increment}>
                    inc
                </Button>
                <Button onClick={onClickResetHandler}
                        disabled={isDisabledRes}

                        className={s.reset}>
                    reset
                </Button>
            </div>
        </div>
    );
};

