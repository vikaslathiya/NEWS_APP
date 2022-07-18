import React, {Fragment} from 'react'
import loader from '../../Assets/loader.gif'

const Spinner = () => {
    return (
        <Fragment>
            <div className="text-center">
                <img className="my-3" src={loader} alt="loading"/>
            </div>
        </Fragment>
    )
}
export default Spinner;