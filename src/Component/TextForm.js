import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Changed to Uppercase", "success");
    }
    const handledownClick = ()=>{
        // console.log("Uppercase was clicked" + text)
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Changed to LowerCase", "success");
    }
    const handleclearClick = ()=>{
        // console.log("Uppercase was clicked" + text)
        let newText = "";
        setText(newText);
        props.showAlert("Text has been Clear", "success");
    }
    const handleCopy = ()=>{
         var text = document.getElementById("myBox");
             text.select();
             text.setSelectionRange(0, 9999);
             navigator.clipboard.writeText(text.value);

            props.showAlert("Copied to Clipboard", "success");
           
    }
    const handleExtraSpace = ()=>{
       let newText = text.split(/[ ]+/);
       setText(newText.join(" "));
       props.showAlert("Extra Spcaces Removed", "success");
        
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    // text = "New Text"; // Wrong way to change the state
    // setText("new Text"); // Correct way to change the state
    return (
        <>
        <div className="container" style={{color: props.mode ==='dark'?'white':'black'}}>
            <h1 className="text-center my-2">{props.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'?'grey':'white', color:props.mode ==='dark'?'white':'black'}} id="myBox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert To Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handledownClick}>Convert To LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleclearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpace}>Clear Space</button>
            
     </div>
     <div className="container my-2" style={{color: props.mode ==='dark'?'white':'black'}}>
         <h1>Your text Summary</h1>
         <p>{text.split(" ").length} words and {text.length} characters</p>
         <p>{0.008 * text.split(" ").length} Minutes to Read</p>
         <h2>Preview</h2>
         <p>{text.length>0?text:"Enter something in above text area to preview it here"}</p>
     </div>
     </>
    )
}
