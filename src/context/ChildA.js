import React from 'react'
import ChildB from './ChildB'

const ChildA = ({name}) => {
  return (
    <div>
      ChildA
      <ChildB name={name}/>
    </div>
  )
}

export default ChildA
