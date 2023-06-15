import { getFilter, setFilter } from 'redux/contactsSlice';
import { DivWrapper, InputFilter } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChange = e => dispatch(setFilter(e.target.value));

  return (
    <DivWrapper>
      <label>
        Find contacts by name
        <InputFilter type="text" value={filter} onChange={handleChange} />
      </label>
    </DivWrapper>
  );
};
