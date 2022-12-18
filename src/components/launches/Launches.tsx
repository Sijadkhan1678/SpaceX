import React,{FC, useState,useEffect } from 'react'
import { useGetLaunchesQuery } from '../../graphql/generated/graphql'
import LaunchItem from './LaunchItem'


   

const Launches:FC = () => {
    

const  { data,loading,error } = useGetLaunchesQuery() 


    return(
        <div className='launches'>
        

          { data &&  data.launches?.map( (launch:any,index) =>  <LaunchItem key={index} launch={launch} /> ) }
        

        </div>
    )

}
export default Launches;