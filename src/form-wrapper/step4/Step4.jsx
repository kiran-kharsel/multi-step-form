import React from 'react'
import './style.css'

function Step4({ formData, setFormData }) {

  console.log(formData)

  const mainPrice = Number(formData.plan.price);
  const addOnsPrice = formData.addOns.reduce((sum, item) => sum + item.price, 0)

  console.log(mainPrice)
  console.log(addOnsPrice)
  return (
    <div className='summary'>
      <div className='summary-heading'>
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming</p>
      </div>
      <div className="summary-detail">
        <div className="summary-detail-main">
          <h4 className="title">{formData.plan.title} ({formData.plan.billing}) </h4>
          <p className="price">
            {
              formData.plan.billing === 'monthly' ?
                `$${formData.plan.price}/mo` :
                `$${formData.plan.price}/yr`
            }
          </p>
        </div>
        <ul className="summary-detail-addons">

          {
            formData.addOns.map((data, index) => {
              return (
                <li key={index} className="addOn">
                  <div className="title">{data.title}</div>
                  <p className="price">${data.price}/{formData.plan.billing === 'monthly' ? 'mo' : 'yr'}</p>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div className="summary-total">
        <div>
          total
          (per {formData.plan.billing === 'monthly' ? 'month' : 'year'})
          </div>
        <p className="price">
          ${mainPrice + addOnsPrice}/{formData.plan.billing === 'monthly' ? 'mo' : 'yr'}
        </p>
      </div>
    </div>
  )
}

export default Step4