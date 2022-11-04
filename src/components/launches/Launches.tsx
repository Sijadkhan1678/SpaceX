import React,{FC} from 'react'
import LaunchItem from './LaunchItem'
import Launch from '../launchdetails/Launch'

const Launches:FC = () => {

    return(
        <div className='launches'>
            <Launch />

            {/* <LaunchItem />
            <LaunchItem />

            <LaunchItem />
            <LaunchItem />
 */}

        </div>
    )

}
export default Launches;