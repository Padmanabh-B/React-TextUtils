import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handlelowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const clearTextArea = () => {
        setText("")
    }

    return (
        <>
            <div className="container" style={ { color: props.mode === 'dark' ? 'white' : 'black' } } >
                <h1>{ props.heading }</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={ text } onChange={ handleOnChange } style={ { backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' } } id="myBox" rows="6"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={ handleUpClick }>Convert To Uppercase</button>
                <button className="btn btn-danger mx-2" onClick={ handlelowerClick }>Convert To Uppercase</button>
                <button className="btn btn-danger mx-2" onClick={ clearTextArea }>Clear The Area</button>
            </div>
            <div className="container my-3" style={ { color: props.mode === 'dark' ? 'white' : 'black' } } >
                <h2>Your Text Summary</h2>
                <p>{ text.split(" ").length } Words and { text.length } characters</p>
                <p>{ 0.008 * text.split(" ").length } Minutes to read</p>

                <h2>Preview</h2>
                <p>{ text.length > 0? text :"Enter Something to Preview it Here"}</p>
            </div>
        </>
    )
}
