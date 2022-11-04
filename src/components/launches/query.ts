import React from 'react'
import {gql} from 'graphql-tag'

 const Query_Launches = gql`
   query  getLaunches {
        launches {
            id
            launch_success
            launch_year
            mission_name
            rocket {
              rocket_name
            }
            links {
              flickr_images
              video_link
            }   
     }
   ` 
   export default Query_Launches