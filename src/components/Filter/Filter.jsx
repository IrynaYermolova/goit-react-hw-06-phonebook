import css from './filter.module.css';
import propTypes from 'prop-types';

const Filter = ({ filter, onChange }) => {
  return (
    <label>
      <h3 className={css.filterTitle}>Find contacts by name</h3>
      <input type="text" name="filter" value={filter} onChange={onChange} className={css.input} />
    </label>
  );
};

Filter.propTypes = {
  filter: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};
export default Filter;
