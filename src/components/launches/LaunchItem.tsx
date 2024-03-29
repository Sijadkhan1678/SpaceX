import { FC } from 'react'
import { GetLaunchesQuery, GetLaunchQuery, LaunchQuery } from '../../graphql/generated/graphql'
import { Link } from 'react-router-dom'



const LaunchItem: FC<LaunchQuery> = ({ launch }) => {

// console.log(launch?.id)
    return (


        <div className='card'>
            <Link to={`launch/${launch?.id}`}>        
                <img src={launch?.links?.flickr_images && launch?.links?.flickr_images[0] || ""} alt='launchimg' />
                <div className='card-content'>

                    <div className='content-item'>
                        <h4>{launch?.mission_name && launch.mission_name}</h4>
                        <p className={launch?.launch_success ? 'success' : 'failed'}>{launch?.launch_success ? "Success" : "Failed"}</p>

                    </div>
                    <div className='content-item'>
                        <h4>{launch?.rocket?.rocket_name}</h4>
                        <p>{launch?.launch_year}</p>


                    </div>

                </div>
            </Link>

        </div>
        // })
    )

}
export default LaunchItem