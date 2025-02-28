import PropTypes from 'prop-types';

const Card = ({ children }) => {
    return (
        <div className="item destination-card destination-card-x">
            {children}
        </div>
    )
}

Card.propTypes = { children: PropTypes.element.isRequired };


export default Card