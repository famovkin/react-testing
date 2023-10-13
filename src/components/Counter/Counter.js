import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from '../../store/reducers/selectors/getCounterValue/getCounterValue';
import { decrement, increment } from '../../store/reducers/counterReducer';

const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getCounterValue);

  const onIncrement = () => {
    dispatch(increment());
  };

  const onDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h1 data-testid="value-title">Value = {value} </h1>
      <button data-testid="increment-btn" onClick={onIncrement}>Icrement</button>
      <button data-testid="decrement-btn" onClick={onDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;
