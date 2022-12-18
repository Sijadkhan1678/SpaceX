import React,{FC} from 'react'
import { GetLaunchesQuery, GetLaunchQuery,LaunchQuery } from '../../graphql/generated/graphql'
import launchImg from '../images/launch.jpg'



const LaunchItem:FC<LaunchQuery>  = ({launch}) => {

    // props.data
    // launch?.flight_number
   // console.log("image",launch?.links?.flickr_images)
    return (
    
        
        <div className='card'>
           <img src={launch?.links?.flickr_images && launch?.links?.flickr_images[0] || ""}  alt='launchimg'/>
           <div className='card-content'>

               <div className='content-item'>
               <h4>{ launch?.mission_name && launch.mission_name}</h4> 
                <p className={launch?.launch_success ? 'success':'failed'}>{launch?.launch_success ? "Success":"Failed"}</p>
                

               </div>
               <div className='content-item'>
                <h4>{launch?.rocket?.rocket_name}</h4>
                <p>{launch?.launch_year}</p>
                

               </div>

           </div>
        </div>
       // })
     )

}
export default LaunchItem