
import "./Toggle.css"
import PropTypes from 'prop-types';

const Toggle = ({ handleChange,isChecked }) => {
  return (
    <div className='toggle-container'>
        <input
        type='checkbox'
        id='check'
        className='toggle'
        onChange={handleChange}
        checked={isChecked}
        />
        <label htmlFor='check'>Dark Mode</label>
    </div>
  )
}
Toggle.propTypes = {
  handleChange: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired,
};


export default Toggle