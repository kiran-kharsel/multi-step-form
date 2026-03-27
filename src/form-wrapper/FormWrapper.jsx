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

  const formDataObj = {
    userName: '',
    email: '',
    phone: null,
    plan: {
      id: null,
      title: '',
      desc: '',
      price: 0,
      billing: '',
    },
    addOns: {
      id: null,
      title: '',
      price: 0,
    }
  }

  const [currentStep, setCurrentStep] = useState(Pages.step1);
  const [formData, setFormData] = useState(formDataObj);

  const Steps = {
    [Pages.step1]: Step1,
    [Pages.step2]: Step2,
    [Pages.step3]: Step3,
    [Pages.step4]: Step4,
  }

  const CurrentComponent = Steps[currentStep]

  const submitBtnText = FINAL_STEP === currentStep ? 'Confirm' : 'Next Step';


  function handleNextStep(){
    if(currentStep === Pages.step1){
      setCurrentStep(currentStep + 1)
    }else if(currentStep === Pages.step2){
      setCurrentStep(currentStep + 1)
    } else if(currentStep === Pages.step3){
      setCurrentStep(currentStep + 1)
    } else{
      console.log('confirm')
    }
  }

  function handleGoBack(){
    if(currentStep > 1){
      setCurrentStep(currentStep - 1)
    }
  }
  
  
  return (
    <div className='form-wrapper'>
      <aside>
        {
          STEPS.map((step) => {
            const {index, heading} = step;
            return (
              <Step 
              key={index} 
              heading={heading} 
              index={index}
              isActive={currentStep >= index}/>
            )
          })
        }
      </aside>
      <main>
        <div className="current-step">
          <CurrentComponent formData={formData}/>
        </div>

        <div className="buttons">
          {
            currentStep > Pages.step1 && <button onClick={handleGoBack} className='go-back'>go back</button>
          }
          <button onClick={handleNextStep} className='next-step'>{submitBtnText}</button>
        </div>
      </main>
    </div>
  )
}

export default FormWrapper