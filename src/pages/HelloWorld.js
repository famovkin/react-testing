import { useState } from "react"

const HelloWorld = () => {
  const [value, setValue] = useState('');
  const [visible, setVisible] = useState(false);

  const toggle = () => value === 'hello' && setVisible(prev => !prev);

  const onChange = (e) => setValue(e.target.value);

  return (
    <div>
      <input id="search" type='text' onChange={onChange}></input>
      <button id="toggle" onClick={toggle} >Hello World</button>
      {visible && <h1 id="hello">Hello world</h1>}
    </div>
  )
}

export default HelloWorld