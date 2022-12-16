import React,{FC, useState,useEffect } from 'react'
import {useQuery,gql} from '@apollo/client'
import { GetLaunchesQuery, useGetLaunchesQuery,LaunchQuery } from '../../graphql/generated/graphql'
import LaunchItem from './LaunchItem'

import Launch from '../launchdetails/Launch'

// const Query_Launches = gql`
  //  query  getLaunches {
        // launches {
            // id
            // launch_success
            // launch_year
            // mission_name
            // rocket {
              // rocket_name
            // }
               
            // }
    //  }
  //  ` 
   

const Launches:FC = () => {
    

const  {data,loading,error} = useGetLaunchesQuery() 



    // const {data,loading,error} = useQuery(Query_Launches)

    if(!loading){
    console.log('data',data)
    }

// if(loading) <div> return loading</div>
// if(error) return <div>error</div>

 
// if(!loading)

    return(
        <div className='launches'>
            {/* <Launch data={data} /> */}

          { data &&  data.launches?.map( (launch:any,index) =>  <LaunchItem key={index} launch={launch} /> ) }
        

        </div>
    )

}
export default Launches;