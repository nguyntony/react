import React, {useState} from 'react'
//useState returns an array, the first item is a value, the second item is a fn that can update value, the initial 0 is ignored after the first time that the fn is called. 

function HookButton({likes}) {
    const [count, setCount] = useState(likes || 0)
    // count is a variable, count is a fn that can set new State, (0) the starter value
    // react context api, this will take place of redux

    return (
        <>
        <button onClick={
            e => {
                setCount(count > 0 ? count - 1 : 0)
            }
        }>Unlike Hook</button>

        <span>{count}</span>
        
        <button onClick={
            e => {
                setCount(count + 1)
            }
        }>Like Hook</button>
        </>
    );
}

export default HookButton