import React from 'react'
import reactLogo from '../../assets/react.svg'
import './header.css'

const Header = () =>{
    return(
        <div className='logo-container'>
            <img className='react-logo' src= {reactLogo} alt='reactlogo'/>
        </div>
    )
}
export default Header;
