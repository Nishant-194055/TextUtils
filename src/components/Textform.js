import React, {useState} from 'react'
export default function Textform(props) {
    const handleUpCase = ()=> {
        let newText = text.toUpperCase();
        SetText(newText);
        props.showAlert('success','converted to Upper Case')
    }
    const handleLwCase = ()=>{
        let newText = text.toLowerCase();
        SetText(newText)
        props.showAlert('success','converter to Lower Case')
    }
   const handleOnCopy = ()=>{
    var copyText = document.getElementById("myInput");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    props.showAlert('success','Text is Copied!!!')
   }
   const handleClear = ()=>{
    SetText('');
    props.showAlert('success','Text is Cleraed!!!!')
   }
   const handleSpace = ()=>{
    let newText = text.split(/[ ]+/);
    SetText(newText.join(" "));
    props.showAlert('success','All Set');
   }
   const handleOnChange = (event)=>{
    SetText(event.target.value);
   } 
const[text,SetText] = useState("Enter Text Here");
  return (
    <div>
 <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
  <label for="exampleFormControlTextarea1" className="form-label"><h1>{props.title}</h1></label>
  <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'gray':'white',color: props.mode==='dark'?'white':'black'}}value = {text} onChange={handleOnChange} id="myInput" rows="3"></textarea>
  <div className='my-3'>
  <button type="button" onClick = {handleUpCase} class="btn btn-primary mx-1">Convert to Upper Case</button>
  <button type="button" onClick = {handleLwCase} class="btn btn-primary mx-1">Convert to Lower Case</button>
  <button type="button" onClick={handleOnCopy} class="btn btn-primary mx-1">copy the text</button>
  <button type="button" onClick ={handleClear}class="btn btn-primary mx-2">clear</button>
  <button type="button" onClick ={handleSpace}class="btn btn-primary mx-2">Remove Extra Space</button>
</div>
</div>
<div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
</div>
  )
}
