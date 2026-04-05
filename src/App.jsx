
import './App.css'
import FormWrapper from './form-wrapper'
import { FormProvider } from './context/FormContext'

function App() {


  return (
    <>
      <FormProvider>
        <FormWrapper />
      </FormProvider>
    </>
  )
}

export default App
