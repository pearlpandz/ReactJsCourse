import React, { useState, useEffect, useContext } from 'react'
import { ThemeContext, AuthContext } from './context/theme.context';


function StateComponent() {

    const [title, setTitle] = useState({ value: "", hasError: false })
    const [description, setDescription] = useState({ value: "", hasError: false })
    const [isFormValid, setFormValid] = useState(false)
    const [count, setCount] = useState(0);
    const { theme, setTheme } = useContext(ThemeContext)
    const { isAutheticated, setAuthorization } = useContext(AuthContext)

    useEffect(() => {
        // subscription for the function
        setCount(count + 1)

        return () => {
            // unsubscription for all the subscriptions
        }
    }, [description])

    const onSubmit = (event) => {
        event.preventDefault();
        handleError();
        if (isFormValid) {
            console.log({ title, description })
        }
    }

    const handleError = () => {
        debugger;
        if (!title.value) {
            setTitle({ ...title, hasError: true }); setFormValid(false)
        } else {
            setFormValid(true)
        }

        if (!description.value) {
            setDescription({ ...description, hasError: true });
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }

    const handleChange = (event) => {
        switch (event.target.name) {
            case "title":
                setTitle({ value: event.target.value, hasError: event.target.value ? false : true })

                break;

            case "description":
                setDescription({ value: event.target.value, hasError: event.target.value ? false : true })
                break;

            default:
                break;
        }
    }

    return (
        <div style={{ backgroundColor: theme === 'light' ? '#fff' : '#000' }}>
            <button style={{ backgroundColor: theme === 'light' ? '#000' : '#red', color: '#fff' }} onClick={() => setTheme('dark')}>update theme to dark</button>
            <button style={{ backgroundColor: theme === 'light' ? '#000' : '#red', color: '#fff' }} onClick={() => setTheme('light')}>update theme to light</button>
            <h1>User {isAutheticated ? 'successfully Logged In' : 'Please login' }</h1>
            {
                isAutheticated ? 
                <button style={{ backgroundColor: theme === 'light' ? '#000' : '#red', color: '#fff' }} onClick={() => setAuthorization(false)}>Logout</button> :
                <button style={{ backgroundColor: theme === 'light' ? '#000' : '#red', color: '#fff' }} onClick={() => setAuthorization(true)}>Login</button>

            }

            {
                isAutheticated ?
                    (<form onSubmit={onSubmit} >
                        <div className='form-group'>
                            <label style={{ color: theme === 'light' ? '#000' : '#fff' }}>Title</label>
                            <input style={{ color: theme === 'light' ? '#000' : '#fff' }} type="text" name="title" value={title.value} onChange={handleChange} />
                            {title.hasError && <p style={{ color: 'red' }}>This is required!</p>}
                        </div>
                        <div className='form-group'>
                            <label style={{ color: theme === 'light' ? '#000' : '#fff' }}>Description</label>
                            <input style={{ color: theme === 'light' ? '#000' : '#fff' }} type="text" name="description" value={description.value} onChange={handleChange} />
                            {description.hasError && <p style={{ color: 'red' }}>This is required!</p>}
                        </div>

                        <button style={{ backgroundColor: theme === 'light' ? '#000' : '#red', color: '#fff' }} type='submit'>submit</button>
                    </form>) :
                    (<div className='counter'>
                        <h1>counter: {count}</h1>
                    </div>)
            }

        </div>
    )
}

export default StateComponent