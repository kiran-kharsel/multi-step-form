import React, { useState } from 'react'
import './style.css'



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

function Step3({ formData, setFormData }) {
  const [selectedIds, setSelectedIds] = useState([]);

  function handleClick(id) {
    if (selectedIds.includes(id)) {
      // deselect if clicked again
      setSelectedIds(selectedIds.filter(item => item !== id));
    } else {
      // select new addon
      setSelectedIds([...selectedIds, id]);
    }

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
              checked={selectedIds.includes(data.id)} 
              data={data}
              billing={formData.plan.billing}
              onClick={handleClick}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default Step3;



// addon component
function AddOn({data, checked, onClick, billing}) {
  const {id, title, desc, monthlyPrice, yearlyPrice} = data;

  function handleClick(){
    onClick(id)
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
        {billing === 'yearly' ? `+$${yearlyPrice}/yr` : `+$${monthlyPrice}/mo`}
      </p>
    </div>
  )
}