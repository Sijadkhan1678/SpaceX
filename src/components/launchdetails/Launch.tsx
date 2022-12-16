import React, { FC } from 'react'
import launch from '../images/launch.jpg'
import launch1 from '../images/rocket.jpg'
import launch2 from '../images/launch1.jpg'
import { GetLaunchQuery, useGetLaunchQuery } from '../../graphql/generated/graphql'


const Launch: FC = () => {

  const id = "3838eu"
    const { data,loading,error } = useGetLaunchQuery({variables:{id}})

    const launch:any = data?.launch
    const LaunchImage = launch && launch.links.flickr_images || null
    return (
        <div className='launch'>
        
            <img src={ LaunchImage || ""} alt="lauunch" />
            <div className='launch-content'>
            <div>
                <h3 title='mission'>{launch?.mission_name}</h3>
                <span title='year'>{launch.launch_year}</span>
             
            </div>
            <div>
                <h2 title='rocket'>{launch.rocket.rocket_name}</h2>
                <h4 title='states'> status :  <span>{launch.launch_success}</span> </h4>
                </div>
            </div>
            <p  title='launch-detail' className='body'>
               {launch.details}
            </p>
            <div title='img-container' className='cover-container'>

                {launch.links.flickr_images.map( (image:string)=> <img src={launch1} alt="lauunch" />)}
               
            
            </div>

        </div>
    )

}
export default Launch;