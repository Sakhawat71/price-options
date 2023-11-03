import PropTypes from 'prop-types';

const Link = ({ route }) => {
    return (
        <li className='mx-2 my-1 text-center bg-purple-500 px-2 py-1 rounded-md text-white'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

Link.propTypes = {
    route: PropTypes.object.isRequired,
};

export default Link;