import React, { useState, useEffect } from 'react'

function List({ getItems }) {

    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(getItems())
    }, [getItems])

    return (
        items?.map((item, index) => (
            <h6 key={index}>{item}</h6>
        ))
    )
}

export default List