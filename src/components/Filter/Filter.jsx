import { useDispatch } from 'react-redux';
import css from './filter.module.css';
import { setFilter } from '../../redux/filter/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const changeFiltr = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <label>
      <h3 className={css.filterTitle}>Find contacts by name</h3>
      <input
        type="text"
        name="filter"
        onChange={changeFiltr}
        className={css.input}
      />
    </label>
  );
};

export default Filter;
