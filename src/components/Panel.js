import React from 'react';
import Button from './Button.js'
import './Panel.css';

function Panel({clickHandler, themes}) {

    
    return (
        <div className="panel-container">
            <div className="panel-row">
                <Button  value={7}  clickHandler={clickHandler} themes={themes} primary/>
                <Button  value={8}  clickHandler={clickHandler} themes={themes} primary />
                <Button  value={9}  clickHandler={clickHandler} themes={themes}  primary/>
                <Button  value="/"  clickHandler={clickHandler} themes={themes}  />
            </div>
            <div className="panel-row">
                <Button  value={5}  clickHandler={clickHandler} themes={themes} primary />
                <Button  value={4}  clickHandler={clickHandler} themes={themes} primary />
                <Button  value={6}  clickHandler={clickHandler} themes={themes} primary />
                <Button value="x"   clickHandler={clickHandler} themes={themes} />
            </div>
            <div className="panel-row">
                <Button  value={1}  clickHandler={clickHandler} themes={themes} primary />
                <Button  value={2}  clickHandler={clickHandler} themes={themes} primary/>
                <Button  value={3}  clickHandler={clickHandler} themes={themes} primary/>
                <Button  value="+"  clickHandler={clickHandler} themes={themes}  />
            </div>
            <div className="panel-row">
                <Button value="C" clickHandler={clickHandler} themes={themes}  />
                <Button value={0} clickHandler={clickHandler} themes={themes} primary/>
                <Button value="=" clickHandler={clickHandler} themes={themes}/>
                <Button value="-" clickHandler={clickHandler} themes={themes} />             
            </div>
            
            
            
        </div>
        
    )
}

export default Panel
