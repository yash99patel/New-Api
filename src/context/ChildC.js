import React from 'react'
import ChildD from './ChildD'

const ChildC = ({ name }) => {
    return (
        <div>
            ChildC
            <ChildD name={name} />
        </div>
    )
}

export default ChildC
