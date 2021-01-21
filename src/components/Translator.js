import React, {useState} from 'react'

function Translator({initialText}) {
    let [text, updateText] = useState(initialText || '')
    const input = document.querySelector("#translator-input")

    return (
        <>
        <h2>This is a translator</h2>
        <div className="translator">
            <input id="translator-input" type="text" onChange={
                e => {
                    updateText(text = input)
                }
            }/>

            <span>{text}</span>
        </div>
        </>
    )
}

export default Translator