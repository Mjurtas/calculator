import React, {useContext} from 'react'
import './Display.css'
import {ThemeContext} from '../contexts'

function Display({text}) {
    const {display} = useContext(ThemeContext)
    return ( 
        <div className="value-display">
            <input type="text" value={text} style={{background: display}}></input>
        </div>
    )
}

export default Display;
