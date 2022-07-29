import React, { useEffect, useState } from 'react'

function SyntheticEvent() {

    const [count, setcount] = useState(0)

    const handleClick = (e) => {
        setcount(count+1)
    }
    

    useEffect(() => { // 
      console.log('triggering')
    }, [])
    

  return (
    <>
    <div>SyntheticEvent</div>
    <button onClick={handleClick}>click and see in console</button>
    </>
  )
}

export default SyntheticEvent