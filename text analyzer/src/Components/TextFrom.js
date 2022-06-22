import React, { useState } from 'react'

function TextFrom() {
    const [text,setText] = useState('Enter the text')
    const[counter,setCount] = useState(0)
    const[letter,setLet] = useState('')
    const HandleClick = () => {
        alert('Clicked convert')
        console.log('Clicked convert')
        let newtext = text.toUpperCase()
        setText(newtext)
    }
    
    const HandleChange = (event) => {
        console.log('Changed the text')
        
        setText(event.target.value)
    }

    const HandleKey = (event) => {
      setCount(counter+1)
      clearInterval()
      console.log(event.target.value)
    }

    const HandleReset =() => {
      setCount(0)
      setText('')
    }

    const toLow = () => {
      setText(text.toLowerCase())
    }
  return (
    <div>
        <div>
      <div className='mb-3'>
          <h1>Text here</h1>
          <textarea className='form-control' value={text} onKeyPress={HandleKey} onChange={HandleChange}  rows='8'>

          </textarea>
          <button className='btn btn-primary' onClick={HandleClick}>Convert to upper case</button>
          <button className='btn btn-primary mx-3' onClick={HandleReset}>Reset Count and text</button>
          <button className='btn btn-primary mx-1' onClick={toLow}>Convert to lower case</button>
          
      </div>
      </div>
      <h1>
        Number of characters entered so far
        
      </h1>
      <p>{counter}</p>
      <h1>
        Preview
        
      </h1>
      <p>
          {text}
        </p>

      <h1>
        Text Summary
      </h1>
      <p>
        {text.split(" ").length} words and {text.length} characters
      </p>
    </div>
  )
  }

export default TextFrom