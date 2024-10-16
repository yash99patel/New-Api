import React, { useContext } from 'react'
import { data } from '../App';

const ChildD = ({name}) => {
    const appData = useContext(data)
    console.log(appData, "ChilD");
    
  return (
    <div>
      ChildD
    </div>
  )
}

export default ChildD
