import React, { memo } from 'react'

const Child = ({ number, handleIncrement }) => {
    console.log("child compenent");

    return (
        <div>
            <button onClick={() => handleIncrement()}>+</button>
            <h1>{number}</h1>
        </div>
    )
}

export default memo(Child)
