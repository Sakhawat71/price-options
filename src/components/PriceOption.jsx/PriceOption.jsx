
import PropTypes from 'prop-types';
import Features from '../Features/Features';

const PriceOption = ({ option }) => {
    // console.log(option)
    const { name, price, features } = option;
    return (
        <div className='flex flex-col text-center border-2 p-4 rounded-xl space-y-3 bg-gray-200'>

            <h2 className='font-bold text-4xl'>{price}</h2>
            <h4 className='text-purple-700 font-semibold text-2xl'>{name}</h4>
            <div className='flex-grow'>
                {
                    features.map((feature, i) => <Features key={i} feature={feature}></Features>)
                }
            </div>
            <button className='btn mx-auto bg-purple-700 text-white hover:bg-purple-500'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object.isRequired,
};

export default PriceOption;