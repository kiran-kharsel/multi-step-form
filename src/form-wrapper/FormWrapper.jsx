import React, { useState } from 'react'
import './style.css'
import Step from './step'

// import all step components
// todo:: lazy load in other file
import Step1 from './step1'
import Step2 from './step2'
import Step3 from './step3'
import Step4 from './step4'


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

// pages 
const Pages = {
  step1: 1,
  step2: 2,
  step3: 3,
  step4: 4,
}

// final steps
const FINAL_STEP = Pages.step4

function FormWrapper() {
  const [currentStep, setCurrentStep] = useState(Pages.step1);

  const Steps = {
    [Pages.step1]: Step1,
    [Pages.step2]: Step2,
    [Pages.step3]: Step3,
    [Pages.step4]: Step4,
  }

  const CurrentComponent = Steps[currentStep]

  const submitBtnText = FINAL_STEP === currentStep ? 'confirm' : 'next step'

  
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
        <div className="current-step">
          <CurrentComponent/>
        </div>

        <div className="buttons">
          <button className='go-back'>go back</button>
          <button className='next-step'>{submitBtnText}</button>
        </div>
      </main>
    </div>
  )
}

export default FormWrapper