import React, { useMemo, useState, useRef } from 'react'

export const TitleComponent = (title) => {
    console.log('titleComponent...');
    return <h1>Its a {title}</h1>
}

function MemoComponent() {

    const [count, setCount] = useState(0);
    const [title, setTitle] = useState('');

    const inputRef = useRef(null);

    const updateCount = () => {
        console.log('updateCount...');
        setCount(count + 1);
    }

    const titleCom = useMemo(() => TitleComponent(title), [title]);
    // const titleCom = titleComponent(title);


    return (
        <>
            <div>MemoComponent {count}</div>

            <button onClick={updateCount}>increase</button>

            <input type="text" ref={inputRef} />

            <button onClick={() => {console.log('test'); setTitle(inputRef.current.value)}}>submit btn</button>

            {title && titleCom}
        </>
    )
}

export default MemoComponent