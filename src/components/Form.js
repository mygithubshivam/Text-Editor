import React,{useState} from 'react'

export default function Form(props) {
  const[text,setText]=useState('')
  const handleUpClick=()=>{
    // console.log("handleClickedUpper")
    let newText=text.toUpperCase()
    setText(newText)
    {props.showAlert("Converted to UpperCase!","success")}
  }
  const handleLoClick=()=>{
    // console.log("handleClickedLOwer")
    let newText=text.toLowerCase()
    setText(newText)
    {props.showAlert("Converted to LowerCase!","success")}
  }
  const handleClClick=()=>{
    // console.log("handleClickedLOwer")
    let newText=''
    setText(newText)
    {props.showAlert("Cleared fully!","success")}
  }
  const [mode,setMode]=useState({
    color:'white',
    backgroundColor:'#042743'
  })
  const [btnText,setBtnText]=useState('Enter dark mode')

  const handleMode=()=>{
    // console.log("handleMode")
    if (mode.color==='white'){
      setMode({
        color:'#042743',
        backgroundColor:'white'
      })
      setBtnText('Enter light mode')
    }
    else{
      setMode({
        color:'white',
        backgroundColor:'#042743'
      })
      setBtnText('Enter dark mode')
    }

  }
  const handleChange=(event)=>{
    // console.log("handleChanged")
    setText(event.target.value)
  }
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h1 className='mb-3'>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'#192b81':'white',color:props.mode==='dark'?'white':'#042743'}}onChange={handleChange} id="text" rows="8"></textarea>
    </div>
    <button disabled={text.length===0} className="btn btn-primary mx-4" onClick={handleUpClick}>Convert to Uppercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-4" onClick={handleLoClick}>Convert to Lowercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-4" onClick={handleClClick}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h2>Your Summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words & {text.length} Characters</p>
      <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minute taken</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in above text area to preview it here"}</p>
    </div>
    </>
    )
}
