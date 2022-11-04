import React from 'react'
import {gql} from 'graphql-tag'

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
   export default Query_Launch 
   