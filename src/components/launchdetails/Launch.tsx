import React, { FC } from 'react'
import launch from '../images/launch.jpg'
import launch1 from '../images/rocket.jpg'
import launch2 from '../images/launch1.jpg'


const Launch: FC = () => {

    return (
        <div className='launch'>
        
            <img src={launch} alt="lauunch" />
            <div className='launch-content'>
            <div>
                <h3 title='mission'>title</h3>
                <span title='year'>year</span>
             
            </div>
            <div>
                <h2 title='rocket'></h2>
                <h4 title='states'> status  <span>success</span> </h4>
                </div>
            </div>
            <p  title='launch-detail' className='body'>
               
            </p>
            <div title='img-container' className='cover-container'>
                <img src={launch1} alt="lauunch" />
                <img src={launch2} alt="lauunch" />
                <img src={launch} alt="lauunch" />
            </div>

        </div>
    )

}
export default Launch;