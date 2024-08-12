import React, {useState} from "react";


export default function TextArea(props){
    const handleUpClick = () =>{
        setText(text.toUpperCase());
        props.showAlart('Message has been converted into uppercase','success')
    }
    const handleLowpClick = () =>{
        setText(text.toLowerCase());
        props.showAlart('Message has been converted into lowercase','success')
    }
    const handleOnChange = (evt) =>{
        console.log("On Change");
        setText(evt.target.value);
    }
    const handlecopy = (evt) =>{
        let text = document.getElementById('MyBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlart('Message has been copied','success')
    }
    const handleextraspaces = () =>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "))
        props.showAlart('Spaces has been removed','success')
    }

    const [text, setText] = useState("Enter a text");

    return(
    <>
        <div className={`container my-5 text-${props.txtColor}`}>
            <div className="mb-3">
                <label htmlFor="MyBox" className="form-label "><h3> {props.heading}  </h3></label>
                <textarea className={`form-control text-${props.txtColor} bg-${props.txtColor === 'light'? 'dark': 'light'}`} value={text} onChange={handleOnChange} id="MyBox" rows="12"></textarea>
            </div>
            <div className="text-align-center">
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-3" onClick={handleLowpClick}>Convert to LowerCase</button>
                <button className="btn btn-primary" onClick={handlecopy}>Copy Text</button>
                <button className="btn btn-primary mx-3" onClick={handleextraspaces}>Remove Extra Spaces</button>
            </div>
        </div>
        <div className={`container my-3 text-${props.txtColor}`}>
            <h2> Your text summary</h2>
            <p>{text.split(" ").length} Words {text.length} charecters
            </p>
            <span>{0.008 * text.split(" ").length} Min</span>
        </div>
        <div className={`container my-3 text-${props.txtColor}`}>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </>
    )
}