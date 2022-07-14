import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';


type DefaultButtonPropsType = DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
    >;

type ButtonPropsType = DefaultButtonPropsType &{
    children?:React.ReactNode
}

export const Button:React.FC<ButtonPropsType> = ({children,...restProps}) => {
    return (
        <button {...restProps} >
            {children}
        </button>
    );
};

