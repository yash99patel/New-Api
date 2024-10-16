import React, { useCallback, useState } from 'react'
import Child from './Child'

const CallBackExample = () => {
    const [number, setNumber] = useState(0)
    const [text, setText] = useState("user")
    const handleIncrement = () => {
        setNumber(number + 1)
    }
    const handleText = () => {
        setText("xyz")
    }

    const handleChild = useCallback(() => {
        handleIncrement()
    }, [number])

    console.log("parent compenent");

    return (
        <div>

            <Child number={number} handleIncrement={handleChild} />
            <button onClick={() => handleText()}>Click me!</button>
            <h1>{text}</h1>
        </div>
    )
}

export default CallBackExample
