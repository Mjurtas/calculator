import React, { useContext } from 'react'
import {ThemeContext }from '../contexts'
import './Button.css'

function Button({value, clickHandler, themes, primary}) {

    // const styling =  {
    //     primbackground: themes && themes.primary,
    //     secbackground: themes && themes.secondary,
    //     onClick: themes && themes.onClick,

    // }

    const {primaryColor, onClick, secondary} = useContext(ThemeContext)

    const inputHandler = (e) => {
    e.preventDefault();   
    clickHandler(value)
    }

    return (
        <div >
            
            <button style={{background: primary ? primaryColor : secondary}}  value={value} onClick={e => {inputHandler(e)}}>
                {value}
            </button>
            
        </div>
    )
}

export default Button;
