import { useState } from 'react';
import './App.css';
import './fuel-calculator.css';

function App() {

  // disabled={isDistance? 'disabled' : ''}
  const [isDistance, setIsDistance] = useState(false);
  const [distance, setDistance] = useState(0);
  
  return (
    <div class='App-header'>
      <form id='fuel-calculation'>
        <div class='title'>
          <p>Стоимость поездки</p>
        </div>
        <div class='name'>
          <label for='distance'>Расстояние</label>
        </div> 
        <div class='input-field'>
          <input onBlur={(e) => {setIsDistance(isDigitValue(e)) ? setDistance(getDigitValue(e)) : setDistance(0)}} type='text' id='distance' name='distance_km' placeholder='введите километраж' autoFocus></input>
          <p>км</p>
          <p class='note'>{errorInfo(isDistance, distance)}</p>
        </div>
        <div class='input-field' style={{marginTop: 15 + 'px'}}>
          <button type='button' name='cost' form='fuel-calculation'>Рассчитать</button>
          <p class='cost'>cost = {distance}</p>
        </div>
      </form>  
    </div>
  );
}

const errorInfo = (flag, value) => {
  if(!flag && !value){
    return !value ? 'uncorrect format' : '';
  }

  return '';
}

const isDigitValue = (e) => {
  const exp = /^\d+.?\d+$/;
  return exp.test(e.target.value);
}

const getDigitValue = (e) => {
  return parseFloat(e.target.value);
}

export default App;