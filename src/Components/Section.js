import React from 'react'
import Header from './Header'
import '../index.css'


function Section(props) {
  
 
 
  return (
    <div id={props.bgImg} className = "h-screen pt-[10rem] bg-cover" >
        {/*<div className='pt-16 mb-20'><Header /></div>*/}
        <h1 className= 'text-[2.5rem]'>{props.prodName}</h1> 
        <p>Order Online for <a className= "underline underline-offset-4" href='https://www.tesla.com/support/taking-delivery?redirect=no'>Touchless Delivery</a></p>
        <div className='pt-[35rem]'>
          <button className='mr-[2rem] px-[4rem] py-[0.5rem] text-[0.75rem] text-white rounded-full bg-neutral-900'>CUSTOM ORDER</button>
          <button className='ml-[2rem] px-[4rem] py-[0.5rem] text-[0.75rem] bg-gray-300 rounded-full'>EXISTING INVENTORY</button>
        </div>
    </div>
  )
}

export default Section