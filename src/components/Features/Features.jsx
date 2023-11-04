import PropTypes from 'prop-types';
import { AiFillCheckCircle } from 'react-icons/ai';

const Features = ({feature}) => {

    return (
        <div className=''>
            <p className='flex '> <AiFillCheckCircle className='text-green-600 mr-2 mt-1'></AiFillCheckCircle> {feature}</p>
        </div>
    );
};

Features.propTypes = {
    feature : PropTypes.string,
};

export default Features;