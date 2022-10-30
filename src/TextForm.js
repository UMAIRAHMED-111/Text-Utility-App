import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.Alert("converting to Upper-case", "success")

    }

    const handleLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.Alert("converting to Lower-case", "success")

    }

    const handleClear = () =>{
        setText("");
        props.Alert("Cleared your text", "success")
    }

    const handleCopy = () =>{
        var text = document.getElementById('my-box');
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.Alert("Copied To Clipboard", "success")
    }    

    const handleSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.Alert("Extra Spaces Removed", "success")
    }
    
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    
    const [text, setText] = useState("");
  return (
    <>
    <div className='container mb-3' style={{color: props.mode==='light'?'black':'white'}}>
      <div class="mb-3" >
      <h1 className='mb-4'>TEXT-UTILS: Word Counter, Character Counter and more</h1>
      <textarea class="form-control" id="my-box" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'rgb(1 42 50)', color: props.mode==='light'?'black':'white'}}></textarea>
      </div>
      <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLowClick}>Convert to Lowercase</button>
      <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleClear}>Clear</button>
      <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy</button>
      <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleSpaces}>Remove Extra Spaces</button>
    </div>

    <div className='container' style={{color: props.mode==='light'?'black':'white'}}>
        <h2>Your text Summary:</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.08*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
        <h2>Preview:</h2>
        <p>{text}</p>

    </div>
    </>
  )
}
