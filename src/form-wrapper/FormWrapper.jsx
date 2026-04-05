import React, { useState } from 'react'
import './style.css'


import { useForm } from '../context/FormContext';


// import all step components
import Step from './step'
import Step1 from './step1'
import Step2 from './step2'
import Step3 from './step3'
import Step4 from './step4'
import SuccessMsg from './success'


// steps
const STEPS = [
  {
    index: 1,
    heading: 'your info',
    component: Step1,
  },
  {
    index: 2,
    heading: 'select plan',
    component: Step2,
  },
  {
    index: 3,
    heading: 'add-ons',
    component: Step3,
  },
  {
    index: 4,
    heading: 'summary',
    component: Step4,
  },
]


// current step
const CURRENT_STEP = 1

function FormWrapper() {
  const {dispatch} = useForm();

  const [currentStep, setCurrentStep] = useState(CURRENT_STEP);
  const [isSubmitConfirm, setIsSubmitConfirm] = useState(false);

  const CurrentComponent = STEPS.find(s => s.index === currentStep).component;
  const isFinalStep = currentStep === STEPS.length;


  function handleNextStep() {
    // return if no personal info
    // if (!formData.userName && !formData.email && !formData.phone) {
    //   return
    // }

    if (currentStep < STEPS.length) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsSubmitConfirm(true)
      //reset formdata
      dispatch({type: 'RESET'})
    }

  }

  function handleGoBack() {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }


  return (
      <div className='form-wrapper'>
        <aside>
          {
            STEPS.map((step) => {
              const { index, heading } = step;
              return (
                <Step
                  key={index}
                  heading={heading}
                  index={index}
                  isActive={currentStep >= index} />
              )
            })
          }
        </aside>
        <main>
          <div className="current-step">
            {
              isSubmitConfirm
                ? <SuccessMsg />
                : <CurrentComponent/>
            }
          </div>

          {
            !isSubmitConfirm &&
            (
              <div className="buttons">
                {
                  currentStep > CURRENT_STEP && <button onClick={handleGoBack} className='go-back'>go back</button>
                }

                <button onClick={handleNextStep} className='next-step'>
                  {isFinalStep ? 'Confirm' : 'Next Step'}
                </button>
              </div>
            )
          }
        </main>
      </div>
  )
}

export default FormWrapper;


