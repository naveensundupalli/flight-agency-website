
import React,{useState} from 'react';
import {SiConsul} from 'react-icons/si';
import {BsPhoneVibrate} from 'react-icons/bs';
import {AiOutlineGlobal} from 'react-icons/ai';
import {CgMenuGridO} from 'react-icons/cg';

import logo from '../../assets/logos.png'
// logo (2).png
const Navbar = () => {
  const [active, setActive] = useState('NavBarMenu')
   const showNavBar = () =>{
    setActive('NavBarMenu showNavBar')
   }
   const removeNavBar = () =>{
    setActive('NavBarMenu')
   }

   const [noBg, addBg] = useState('NavBarMenu')
    const addBgColor = () =>{
     if(window.scrollY >= 10){
      addBg('NavBarTwo navbar_With_Bg')
      }else{
      addBg('navBarTwo')
      }
    }
    window.addEventListener('scroll',addBgColor)

  return (
    <div className='NavBar flex'>
      <div className='NavBarOne flex'>
      <div>
       <SiConsul/>
      </div>
        <div className='none flex'>
          <li className='flex'> <BsPhoneVibrate/> Support</li>
          <li className='flex'> <AiOutlineGlobal/> Languages</li>
        </div>

        <div className='atb flex'>
          <span>sign In</span>
          <span>sign Out</span>
        </div>
    </div>

    <div className='NavBarTwo'>

    <div className='logoDiv'>
     <img src={logo} className='logo'/>
    </div>
    
     <div className={active}>
       <ul className='menu flex'>
        <li onClick={removeNavBar} className='listItem'>Home</li>
        <li onClick={removeNavBar}className='listItem'>About</li>
        <li onClick={removeNavBar}className='listItem'>Offers</li>
        <li onClick={removeNavBar}className='listItem'>Seats</li>
        <li onClick={removeNavBar}className='listItem'>Destinations</li>
       </ul>

       <button onClick={removeNavBar}className='btn flex btnOne'>
        Contact
       </button>

       <button className='btn flex btnTwo'>
        Contact
       </button>
       
     </div>
     <div onClick={showNavBar}className='toggleIcon'>
         <CgMenuGridO className='icon'/>
       </div>
    </div>
    </div>
  )
}

export default Navbar;