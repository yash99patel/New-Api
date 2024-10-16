import React, { useMemo, useState } from 'react'

const MemoExample = () => {
    const [number, setNumber] = useState(0)
    const [text, setText] = useState("user")
    const handleIncrement = () => {
        setNumber(number + 1)
    }
    const handleText = () => {
        setText("xyz")
    }
    const calc = (num) => {
        for (let index = 0; index < 1000000000; index++) { }
        return num
    }
    const num = useMemo(() => {
        return calc(number)
    }, [number])
    return (
        <div>
            <button onClick={() => handleIncrement()}>+</button>
            <h1>{number}</h1>
            <button onClick={() => handleText()}>Click me!</button>
            <h1>{text}</h1>
        </div>
    )
}

export default MemoExample
