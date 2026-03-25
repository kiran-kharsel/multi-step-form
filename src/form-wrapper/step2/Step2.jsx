import React, { useState } from 'react'
import './style.css'

// icons
import arcadeIcon from '../../assets/icon-arcade.svg'
import advancedIcon from '../../assets/icon-advanced.svg'
import proIcon from '../../assets/icon-pro.svg'


// card data
const CardData = [
  {
    id: 1,
    title: 'arcade',
    monthlyPrice: 9,
    yearlyPrice: 90,
    icon: arcadeIcon,
  },
  {
    id: 2,
    title: 'advanced',
    monthlyPrice: 12,
    yearlyPrice: 120,
    icon: advancedIcon,
  },
  {
    id: 3,
    title: 'pro',
    monthlyPrice: 15,
    yearlyPrice: 150,
    icon: proIcon,
  },
]

const SELECTED_CARD_INDEX = 0;

function Step2() {
  const [checked, setChecked] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(SELECTED_CARD_INDEX)

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  function handlleSelectPlan(index){
    setSelectedIndex(index)
    console.log(CardData[index])
  }


  return (
    <div className='select-plan'>
      <div className="select-plan-heading">
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing</p>
      </div>

      <div className="cards">
        {
          CardData.map((data, index) => {
            const { id, title, monthlyPrice, yearlyPrice, icon } = data
            return (
              <Card
                index={index}
                key={id}
                icon={icon}
                title={title}
                monthlyPrice={monthlyPrice}
                yearlyPrice={yearlyPrice}
                checked={checked}
                isSelected = {selectedIndex === index}
                onSelectPlan = {handlleSelectPlan}
              />
            )
          })
        }
      </div>


      <div className="subscription">
        <label
          style={{ fontWeight: checked ? '' : '600' }}
          htmlFor="subscription-toggle">monthly</label>
        <input
          checked={checked}
          onChange={handleCheckboxChange}
          className="tgl tgl-light" id="subscription-toggle" type="checkbox" />
        <label className="tgl-btn" htmlFor="subscription-toggle" />
        <label
          style={{ fontWeight: checked ? '600' : '' }}
          htmlFor="subscription-toggle">yearly</label>
      </div>
    </div>
  )
}

export default Step2


// card component
function Card({ icon, index, title, monthlyPrice, yearlyPrice, checked, isSelected, onSelectPlan }) {
  
  function handleClick(){
    onSelectPlan(index)
  }
  
  return (
    <div 
    style={{borderColor: isSelected ? 'mediumblue' : 'lightgray'}}
    onClick={handleClick}
    className="card">
      <div className="icon">
        <img src={icon} alt={title} />
      </div>
      <div className="card-details">
        <h3>{title}</h3>
        {
          checked ? (
            <>
              <p>${yearlyPrice}/yr</p>
              <span>2 months free</span>
            </>
          ) : (
            <p>${monthlyPrice}/mo</p>
          )
        }
      </div>
    </div>
  );
}
