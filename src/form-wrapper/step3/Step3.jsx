import React, { useEffect, useState } from 'react'
import './style.css'

import { useForm } from '../../context/FormContext';


const AddOnsData = [
  {
    id: 1,
    title: 'Online service',
    desc: 'Access to multiplayer games',
    monthlyPrice: 1,
    yearlyPrice: 10,
  },
  {
    id: 2,
    title: 'Larger storage',
    desc: 'Extra 1TB cloud save',
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
  {
    id: 3,
    title: 'Customizable profile',
    desc: 'Custom theme on your profile',
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
]

function Step3() {

  const {formData, dispatch} = useForm();

  function handleClick(addOn) {
    dispatch({type: 'TOGGLE_ADDON', addOn})
  }

  

  return (
    <div className='add-ons-container'>
      <div className="add-ons-heading">
        <h1>Pick add-ons</h1>
        <p>Add-ons help to enhance your gaming experince</p>
      </div>

      <div className="add-ons">
        {
          AddOnsData.map((data) => {
            return (
              <AddOn
                key={data.id}
                checked={formData.addOns.some(obj => obj.id === data.id)}
                data={data}
                billing={formData.plan.billing}
                onClick={handleClick} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Step3;



// addon component
function AddOn({ data, checked, onClick, billing }) {
  const { id, title, desc, monthlyPrice, yearlyPrice } = data;
  const price = billing === 'yearly' ? yearlyPrice : monthlyPrice

  function handleClick() {
    onClick(data)
  }

  return (
    <div
      style={{ borderColor: checked ? 'mediumblue' : 'lightgray' }}
      className="add-on" onClick={handleClick}>
      <input checked={checked} readOnly type="checkbox" className='checkbox' />
      <div>
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
      <p className='price'>
        +$
        {price}
        /{billing === 'yearly' ? 'yr' : 'mo'}
      </p>
    </div>
  )
}