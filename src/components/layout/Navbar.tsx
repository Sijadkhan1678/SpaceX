import React from 'react'
import logo from './logo.svg'
 import {NavLink} from 'react-router-dom'

export const Navbar = () => {
 const id = "sievn23435idvnn"
  return (
    <header>
     <nav>
        <img className='logo' src={logo} style={{
          width: '80px'
        }} />
        <ul>
        
        <NavLink style={style}  to='/'>Home</NavLink>
        
        <NavLink style={style} to='/about'>About</NavLink>
        <NavLink style={style} to={`/launch/${id}`}>Launch</NavLink>

        
        </ul>
      
     </nav>
        

     </header>
  )
}
const style = ({isActive}:any) => {
  // console.log('isactive',isActive)
  return{

       color: 'white',
       borderBottom: isActive === true ? '2px solid white': '',
       textDecoration:"none"

  }
} 
export default Navbar