import React, { useState } from 'react'
import './style.css'
import Step from './step'


// steps
const STEPS = [
  {
    index : 1,
    heading: 'your info',
  },
  {
    index : 2,
    heading: 'select plan',
  },
  {
    index : 3,
    heading: 'adds-on',
  },
  {
    index : 4,
    heading: 'summary',
  },
]

function FormWrapper() {
  const [isActive, setIsActive] = useState(false);

  
  return (
    <div className='form-wrapper'>
      <aside>
        {
          STEPS.map((step) => {
            const {index, heading} = step;
            return (
              <Step key={index} heading={heading} index={index}/>
            )
          })
        }
      </aside>
      <main>
        <div className="current-step"></div>
        <div className="buttons">
          <button className='go-back'>go back</button>
          <button className='next-step'>next step</button>
        </div>
      </main>
    </div>
  )
}

export default FormWrapper