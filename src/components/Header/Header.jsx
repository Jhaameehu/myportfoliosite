import React from 'react'
import './Header.css'
import AdminImg from '../../Images/adminPhoto.jpg';
import { IoIosNotificationsOutline } from 'react-icons/io'
import { IconContext } from 'react-icons/lib';
const Header = () => {
    return (
        <div>
            <div className='topBar'>
            <h1>TransMonitor</h1>
            <input id="icon" type="text" placeholder="Search..."/>
            <div className='topRight'>
                <ul>
                    <a href='/'><li>Support</li></a>
                    <a href='/'><li>FAQ</li></a>
                    <IconContext.Provider value={{size:'20px'}}>
                    <a href='/' className='notification'><li><IoIosNotificationsOutline/>
                    <span className="badge">3</span></li></a>
                    </IconContext.Provider>
                    
                </ul>
            </div>
            <div className='userLogin'>
                <p className='welcomeNote'>Hello</p>
                <p className='userName'>Oluwaleke Ojo</p>                
            </div>
            <img src={AdminImg} alt='' />
            </div>
           
        </div>
    )
}

export default Header
