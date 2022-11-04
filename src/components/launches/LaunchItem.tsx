import React,{FC} from 'react'
import launchImg from '../images/launch.jpg'

const LaunchItem:FC = () => {

    return (

        <div className='card'>
           <img src={launchImg}  alt='launchimg'/>
           <div className='card-content'>

               <div className='content-item'>
                <h4>Mission Name</h4>
                <p>succes</p>
                

               </div>
               <div className='content-item'>
                <h4>Rocket Name</h4>
                <p>Year 2012</p>
                

               </div>

           </div>
        </div>
    )

}
export default LaunchItem