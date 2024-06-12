import { useState } from 'react';
import './App.css';
import './fuel-calculator.css';

function App() {

  let value = 10;
  const [getValue, setValue] = useState(value);
  const [getMargin, setMargin] = useState(0);
  let p_element = <p class='note'>p tag element</p>;
  
  return (
    <div class='App-header'>
      <form>
        <div class='title'>
          <p>Стоимость поездки</p>
        </div>
        <div class='name'>
          <label for='distance'>Расстояние</label>
        </div> 
        <div class='input-field'>
          <input type='text' id='distance' name='distance_km' placeholder='введите километраж'></input>
          <p>км</p>
          <p class='note'>Note</p>
        </div>
      </form>
      
      {/* <button onClick={(e) => setValue(setNewValue(e, getValue))}>Calculate</button> */}

      {/* <button onClick={(e) => setMargin(setMarginLeft(e, getMargin))}>Calculate</button>
      <button onClick={showInfoEvent}>BtnEvent</button>
      <button onClick={() => showInfoText('check call btn-info')}>BtnInfo</button>
      <button onClick={(e) => showInfoEventText(e, 'check call btn__info-event')}>BtnInfoEvent</button> */}

      <button onClick={() => setMargin(setMarginLeft(getMargin))}>BtnTest</button>
      <p>{getText('Hello world!')}</p>
      <p>Margin left: {getMargin != 0 ? getMargin : 'none'}</p>

      <p>{`custom value ${value}`}</p>
      <p style={{backgroundColor: 'red', marginLeft: getMargin + 'px'}}>New Position = {getMargin}</p>
      {p_element}
      
    </div>

  );
}

const getText = (text) => {
  return `function text: ${text}`;
}

const setMarginLeft = (value) => {
  return value += 50;
}

const setNewValue = (e, value) => {
  console.log(e.target.textContent, `value = ${value}`);
  
  return value += 10;
}

const showInfoEvent = (e) => {
  console.log(e.target.textContent);
}

const showInfoText = (text) => {
  console.log('test', text);
}

const showInfoEventText = (e, text) => {
  console.log(e.target.textContent, text);
}

export default App;
