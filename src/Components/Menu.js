import React from 'react'
import {toggleMenu} from './Header'

function Menu() {
  return (
    <div className='my-[5rem]'>
        <ul className='ml-[2rem] leading-10'>
            <li className='hover:rounded-full hover:bg-gray-400 cursor-pointer ml-[10rem]'>
                <p  onClick= { ()=>{  (document.getElementById('menu').className === 'hidden w-[20rem] fixed inset-y-0 right-0  bg-white col-start-3 ml-[20rem] text-left'?document.getElementById('menu').className ='w-[20rem] fixed inset-y-0 right-0  bg-white col-start-3 ml-[20rem] text-left': document.getElementById('menu').className = 'hidden w-[20rem] fixed inset-y-0 right-0  bg-white col-start-3 ml-[20rem] text-left')
    console.log("HI")} } className='ml-[2rem]'>Close</p>
            </li>
            <li className='hover:rounded-full hover:bg-gray-400 cursor-pointer mr-[2rem]'>
                <a href='#' className='ml-[3rem]'>Existing Inventory</a>
            </li>
            <li  className='hover:rounded-full hover:bg-gray-400 cursor-pointer mr-[2rem]'>
                <a href='#'  className='ml-[3rem]'>Used Inventory</a>
            </li>
            <li  className='hover:rounded-full hover:bg-gray-400 cursor-pointer mr-[2rem]'>
                <a href='#'  className='ml-[3rem]'>Trade-In</a>
            </li>
            <li  className='hover:rounded-full hover:bg-gray-400 cursor-pointer mr-[2rem]'>
                <a href='#'  className='ml-[3rem]'>Test Drive</a>
            </li>
            <li  className='hover:rounded-full hover:bg-gray-400 cursor-pointer mr-[2rem]'>
                <a href='#'  className='ml-[3rem]'>Insurance</a>
            </li>
            <li  className='hover:rounded-full hover:bg-gray-400 cursor-pointer mr-[2rem]'>
                <a href='#'  className='ml-[3rem]'>Cybertruck</a>
            </li>
            <li  className='hover:rounded-full hover:bg-gray-400 cursor-pointer mr-[2rem]'>
                <a href='#'  className='ml-[3rem]'>Roadtser</a>
            </li>
            <li  className='hover:rounded-full hover:bg-gray-400 cursor-pointer mr-[2rem]'>
                <a href='#'  className='ml-[3rem]'>Semi</a>
            </li>
            <li  className='hover:rounded-full hover:bg-gray-400 cursor-pointer mr-[2rem]'>
                <a href='#'  className='ml-[3rem]'>Charging</a>
            </li>
            <li  className='hover:rounded-full hover:bg-gray-400 cursor-pointer mr-[2rem]'>
                <a href='#'  className='ml-[3rem]'>Powerwall</a>
            </li>
            <li  className='hover:rounded-full hover:bg-gray-400 cursor-pointer mr-[2rem]'>
                <a href='#'  className='ml-[3rem]'>Commercial Energy</a>
            </li>
            <li  className='hover:rounded-full hover:bg-gray-400 cursor-pointer mr-[2rem]'>
                <a href='#'  className='ml-[3rem]'>Utilities</a>
            </li>
            <li  className='hover:rounded-full hover:bg-gray-400 cursor-pointer mr-[2rem]'>
                <a href='#'  className='ml-[3rem]'>Find Us</a>
            </li>
            <li  className='hover:rounded-full hover:bg-gray-400 cursor-pointer mr-[2rem]'>
                <a href='#'  className='ml-[3rem]'>Support</a>
            </li>
            <li  className='hover:rounded-full hover:bg-gray-400 cursor-pointer mr-[2rem]'>
                <a href='#'  className='ml-[3rem]'>Investor Relations</a>
            </li>
        </ul>
    </div>
  )
}

export default Menu