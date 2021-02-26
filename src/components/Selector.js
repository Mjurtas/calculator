import React from 'react'

function Selector({setColor}) {

    const handleColorChange = (e) => {
        setColor(e.target.value)

    }
    return (
        <div>
            <select onChange={handleColorChange}>
                <option value="ios">iPhone-ish</option>
                <option value="pink">My little pony-ish</option>
                <option value="pastel">Pastell-ish</option>
            </select>
        </div>
    )
}

export default Selector;
