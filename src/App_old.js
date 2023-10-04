import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState('');

  const onClick = () => setToggle((prev) => !prev);

  useEffect(() => {
    setTimeout(() => {
      setData('data');
    }, 100);
  }, []);

  return (
    <div>
      <h1 data-testid="value-elem">{value}</h1>
      {toggle && <div data-testid="toggle-elem">toggle</div>}
      {data && <div style={{ color: 'red' }}>data</div>}
      <h1>Hello world</h1>
      <button data-testid="toggle-btn" onClick={onClick}>
        click me
      </button>
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        placeholder="input value.."
      />
    </div>
  );
}

export default App;
