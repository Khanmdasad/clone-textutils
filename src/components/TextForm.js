import React, { useState } from 'react'

export default function Textform(props) {

    const handleUpClick = () => {
        // console.log("Uppercase was Clicked", + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!","success");
    }

    const handleLoClick = () => {
        // console.log("Uppercase was Clicked", + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!","success");
    }

    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value)
        
    }

    // const handlecap = () =>{
    //     let newText = text.capitalize();
    //     setText(newText);
    // }

    const handleCopy = () => {
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied to Clipboard!","success");
    }

    const handleClear = () => {
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared!","success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extraspace Removed!","success");
    }

    const [text, setText] = useState('');


    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange}
                        style={{
                            backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
                            color: props.mode === 'dark' ? 'white' : '#042743'
                        }} id="mybox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert To Lowercase</button>
                {/* <button className="btn btn-primary mx-1" onClick={handlecap}>Capitalized</button> */}
                <button className="btn btn-primary mx-1" onClick={handleClear}>Clear</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Space</button>

            </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>

                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} Words and {text.length} Charcters</p>
                <p>{0.008 * text.split(" ").length} Minutes To Read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Enter Something in the text above to Preview it"}</p>
            </div>

        </>
    )
}
