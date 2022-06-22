import React from 'react'

export default function Accordion() {

    let mystyle = {
        color: 'white',
        backgroundColor: 'black'
    }
  return (
    <div className='container' style={mystyle}>
        <h1>This is dropdown</h1>
        <div className='accordion' id='accordionExample' >
        <div className='accordion-item' >
            <h2 className='accordion-header' id='headingOne' >
                <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#collapseOne' aria-expanded='true' aria-controls='collapseOne'>
                    Item 1
                </button>
            </h2>
            <div className='accordion-collapse collapse show' id='collapseOne' aria-labelledby='headingOne' data-bs-parent='#accordionExample'>
            <strong>This is the first accordion item body</strong>
            </div>
        </div>
    </div>

    <div className='accordion' id='accordionExample'>
        <div className='accordion-item'>
            <h2 className='accordion-header' id='headingTwo'>
                <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#collapseTwo' aria-expanded='true' aria-controls='collapseTwo'>
                    Item 1
                </button>
            </h2>
            <div className='accordion-collapse collapse show' id='collapseTwo' aria-labelledby='headingTwo' data-bs-parent='#accordionExample'>
            <strong>This is the second accordion item body</strong>
            </div>
        </div>
    </div>

    </div>
    
    
  )
}
