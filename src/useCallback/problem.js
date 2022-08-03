import React, { useCallback, useState } from 'react'
import List from './list';

function Problem() {

    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false)

    const theme = {
        color: dark ? '#fff' : '#000',
        backgroundColor: dark ? '#000' : '#fff'
    }

    const getItems = useCallback(() => {
        console.log('get items ....')
        return [number, number + 1, number + 2]
    }, [number])



    
  return (
    <div style={theme}>
        <h1>Problem</h1>
        <input type="number" value={number} onChange={e => setNumber(Number(e.target.value))} />
        <h4>Number: {number ? number : 0}</h4>

        <List getItems={getItems}></List>


        <button onClick={() => setDark(prevDark => !prevDark)}>Toggle Theme</button>
    </div>
  )
}

export default Problem