import React from 'react'
import { useState } from 'react'
import Menu from './Menu'


//import Test from '../../images/Test'

function Header() {

//const [displayStatus,setDisplayStatus] = useState('hidden')

const toggleMenu = () =>{
    (document.getElementById('menu').className === 'hidden w-[20rem] fixed inset-y-0 right-0  bg-white col-start-3 ml-[20rem] text-left'?document.getElementById('menu').className ='w-[20rem] fixed inset-y-0 right-0  bg-white col-start-3 ml-[20rem] text-left': document.getElementById('menu').className = 'hidden w-[20rem] fixed inset-y-0 right-0  bg-white col-start-3 ml-[20rem] text-left')
}

  return (
    <div className='header w-full grid grid-cols-3 box-border' >
        <img className='header-logo pl-[10%]' src='./images/tesla-logo.png' width='20%' height='100%' alt='logo' /> 
        <nav className='product-links'>
            <ul className='grid grid-cols-6'>
                <li className='hover:rounded-full hover:bg-gray-400 cursor-pointer'> Model 3</li>
                <li className='hover:rounded-full hover:bg-gray-400 cursor-pointer'> Model Y</li>
                <li className='hover:rounded-full hover:bg-gray-400 cursor-pointer'> Model S</li>
                <li className='hover:rounded-full hover:bg-gray-400 cursor-pointer'> Model X</li>
                <li className='hover:rounded-full hover:bg-gray-400 cursor-pointer'> Solar Roof</li>
                <li className='hover:rounded-full hover:bg-gray-400 cursor-pointer'> Solar Panels</li>
            </ul>
        </nav>
        <nav className='utility-links'>
            <ul className='grid grid-cols-3 pl-[30%]'>
                <li className='hover: w-[50%]  hover:rounded-full hover:bg-gray-400 cursor-pointer'>Shop</li>
                <li className='hover: w-[50%]  hover:rounded-full hover:bg-gray-400 cursor-pointer'>Account</li>
                <li className='hover: w-[50%] hover:rounded-full hover:bg-gray-400 cursor-pointer' onClick= { ()=>{  (document.getElementById('menu').className === 'hidden w-[20rem] fixed inset-y-0 right-0  bg-white col-start-3 ml-[20rem] text-left'?document.getElementById('menu').className ='w-[20rem] fixed inset-y-0 right-0  bg-white col-start-3 ml-[20rem] text-left': document.getElementById('menu').className = 'hidden w-[20rem] fixed inset-y-0 right-0  bg-white col-start-3 ml-[20rem] text-left')} }>Menu</li>
            </ul>
        </nav>
        <div id = "menu" className="hidden w-[20rem] fixed inset-y-0 right-0  bg-white col-start-3 ml-[20rem] text-left"><Menu /></div>
       
    </div>
  )
}

export default Header
export function toggleMenu(){}