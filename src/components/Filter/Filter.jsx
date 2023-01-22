import { selectFilter } from '../../redux/./contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/./contacts/filterSlice';
import { TitleFilter, InputFilter, FilterWrap } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilter);

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };
  return (
    <FilterWrap>
      <TitleFilter>Find contacts by name</TitleFilter>
      <InputFilter
        type="text"
        name="filter"
        value={filterValue}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleFilterChange}
      />
    </FilterWrap>
  );
};
