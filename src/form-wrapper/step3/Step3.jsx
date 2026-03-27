import React, { useState } from 'react'
import './style.css'



const AddOnsData = [
  {
    id: 1,
    title: 'Online service',
    desc: 'Access to multiplayer games',
    price: '',
  },
  {
    id: 2,
    title: 'Larger storage',
    desc: 'Extra 1TB cloud save',
    price: '',
  },
  {
    id: 3,
    title: 'Customizable profile',
    desc: 'Custom theme on your profile',
    price: '',
  },
]

function Step3() {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id)
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
              checked={selectedId === data.id} 
              data={data}
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
function AddOn({data, checked, onClick}) {
  const {id, title, desc, price} = data;

  function handleClick(){
    console.log('ok')
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
      <p className='price'>+${10}/yr</p>
    </div>
  )
}