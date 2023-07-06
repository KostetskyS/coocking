import React, {useState} from 'react'
import '../assets/css/header.css'
import logo from '../assets/images/logo.png'
import { MyModal } from './MyModal'
export const Header = () => {

  const [isOpen, setIsOpen] = useState(false)
  
  const handleOpen = () => {
    setIsOpen(true)
  }
  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <div className='headerWrapp'>
        <img
            src={logo}
            alt="logo"
            width='50px'/>
        <div className='headerLinks'>
            <a href='#'>Home</a>
            <a href='#'>About</a>
            <a href='#'>Contacts</a>
        </div>  
        <div className='headerBtns'>
            <button onClick={handleOpen}>Log In</button>
            <button>Register</button>
        </div>
        <MyModal open={isOpen} onModalClose={handleClose}/>
    </div>
  )
}
