import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
 import {faStar as reguStar} from '@fortawesome/free-regular-svg-icons';

const Star = ({num}) => {

    return (
        <div>
            {
                num >= 1 ? (
                <span  style={{color:'yellow'}}>
                <FontAwesomeIcon icon={faStar}/>
                </span>
                ) :(
                    <span>
                        <FontAwesomeIcon icon={reguStar}/>
                    </span> 
                )
            }
            {
                num >= 2 ? (
                <span className='m-1'  style={{color:'yellow'}}>
                <FontAwesomeIcon icon={faStar}/>
                </span>
                ) :(
                    <span className='m-1'>
                        <FontAwesomeIcon icon={reguStar}/>
                    </span>
                )
            }
            {
                num >= 3 ? (
                <span className='m-1'  style={{color:'yellow'}}>
                <FontAwesomeIcon icon={faStar}/>
                </span>
                ) :(
                    <span className='m-1'>
                        <FontAwesomeIcon icon={reguStar}/>
                    </span>
                )
            }
            {
                num >= 4 ? (
                <span className='m-1'  style={{color:'yellow'}}>
                <FontAwesomeIcon icon={faStar}/>
                </span>
                ) :(
                    <span className='m-1'>
                        <FontAwesomeIcon icon={reguStar}/>
                    </span>
                )
            }
            {
                num >= 5 ? (
                <span className='m-1'  style={{color:'yellow'}}>
                <FontAwesomeIcon icon={faStar}/>
                </span>
                ) :(
                    <span>
                        <FontAwesomeIcon icon={reguStar}/>
                    </span>
                )
            }
        </div>
    )
}

export default Star;