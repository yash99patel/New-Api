import React from 'react'
import ChildC from './ChildC'

const ChildB = ({name}) => {
    return (
        <div>
            ChildB
            <ChildC name={name}/>
        </div>
    )
}

export default ChildB
