import React, { FC } from 'react'
import launch from '../images/launch.jpg'
import launch1 from '../images/rocket.jpg'
import launch2 from '../images/launch1.jpg'
import { useParams } from 'react-router-dom'
import {gql} from 'graphql-tag'

import { GetLaunchQuery, useGetLaunchQuery } from '../../graphql/generated/graphql'
import { useQuery } from '@apollo/client'


const Launch: FC = () => {

    const Query_Launch =  gql`
       query getLaunch (id: String!)  {
        launch(id: $id) {
   
            launch_success
             launch_year
            
             mission_name
            rocket {
              rocket_name
            }
             details
            links {
              flickr_images
            }
        }
   `
   const id = "92"
   
   const { data,loading,error } = useQuery(Query_Launch,{variables:{id}})

   // const params = useParams()
  //  const id = params.id as string
    //console.log(params.id)
    

   // const id = "92" as string
//    const { data,loading,error } = useGetLaunchQuery({variables:{id}})
    //  const { data, loading, error } = useGetLaunchQuery({
    //       variables: {
    //      id:id
    //       },
    //  });


    if (loading){
        return <div>Loading </div>
    }
    if(error || !data){
        console.log(error);
        return <div>error</div>
    
}
        
  //  console.log("Luanch data",data)
   // console.log("Luanch error",error)
   // console.log("Luanch loading",loading)
  //  if(data){
        // console.log("data",data)
  //  }

   // const launch:any = data?.launch
    //const LaunchImage = launch && launch.links.flickr_images || null
    return (
        <div className='launch'>
            hi im a Launch page
        
            {/* <img src={ LaunchImage || ""} alt="lauunch" />
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
               
            
            </div> */}

        </div>
    )

}
export default Launch;