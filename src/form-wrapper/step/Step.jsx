import React from 'react'
import './style.css'

function Step({ index, heading, isActive = false}) {
    return (
        <div
        className='step'>
            <div 
            style={{
                backgroundColor: isActive ? 'skyblue' : 'transparent',
            }}
            className="index">{index}</div>
            <div className="heading">
                <p>step {index}</p>
                <h3>{heading}</h3>
            </div>
        </div>
    )
}

export default Step