import React,{useState}from 'react'

export default function TextForm(props) {


const  handleupclick =()=> {
  //  console.log("uppercase was clicked"+text);
    let word = text.toUpperCase();
     setText(word);
}
const  handledownclick =()=> {
    let word = text.toLowerCase();
     setText(word);
}
const  handleOnChange =(event)=> {
    console.log("On Change");
    setText(event.target.value);
    
}
///this logic made by me
const  newconsept=()=> {
    console.log("On Change");
    setText("");
}
//speack function
const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
}
//stop and  speak
const speak2 = () => {
  let msg = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(msg);
  const toogle = document.getElementById('toggle')
  if (toogle.textContent == "Speak") {
      toogle.innerHTML = "Stop"
  }
  else {
      toogle.innerHTML = "Speak"
      if (toogle.innerHTML = "Speak"){
          window.speechSynthesis.cancel()
      }
  }
}



const [text,setText] =useState('');

  return (
    <>
<div>
        <h1>{props.heading1}</h1>
    <div className="mb-3">
    <label for="myBox" className="form-label">{props.heading2}</label>
    <textarea className="form-control" id="myBox" rows="8"  value={text} onChange={handleOnChange}  ></textarea>
    <button type="button" className="btn btn-primary my-2" onClick={handleupclick}>Convert To Upercase</button>
    <button type="button" className="btn btn-primary my-2 mx-2" onClick={handledownclick}>Convert To Lowercase</button>
    <button type="button" className="btn btn-primary my-2 mx-2" onClick={newconsept}>Clear</button>
    <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
    <button type="submit" onClick={speak2} className="btn btn-danger mx-2 my-2" id="toggle">Speak</button>
    </div>
</div>
<div className="container my-2">
  <h2 >NUMBER OF CHARACTERS</h2>
  <p>{text.split(" ").length} Words and {text.length} Characters</p>
  <h4>{0.008 * text.split(" ").length} Minutes Read</h4>
</div>
<h3>PREVIEW</h3>
<p>{text}</p>
</>
  )
}
