import { useState } from 'react';
import './App.css';
import './fuel-calculator.css';

function App() {

  // disabled={isDistance? 'disabled' : ''}
  let [isDistance, setIsDistance] = useState(false);
  let [distance, setDistance] = useState(0);

  // const [isConsume, setIsConsume] = useState(false);
  // const [consume, setConsume] = useState(0);

  // const [isPrice, setIsPrice] = useState(false);
  // const [price, setPrice] = useState(0);

  const setStates = (e) => {
    if(isDigitValue(e)){
      setIsDistance(true);
      setDistance(getDigitValue(e));
    }
    else{
      setIsDistance(false);
      setDistance(0);
    }
  }
  
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
          <input onBlur={setStates} type='text' id='distance' name='distance_km' placeholder='введите километраж' autoFocus></input>
          <p>км {distance}</p>
          <p class='note'>{errorInfo(isDistance, distance)}</p>
        </div>

        {/* BLOCK AVERAGE CONSUMENION */}
        {/* <div class='name'>
          <label for='consume'>Средний расход топлива</label>
        </div> 
        <div class='input-field'>
          <input onBlur={(e) => {setIsConsume(isDigitValue(e)) ? setConsume(getDigitValue(e)) : setConsume(0)}} type='text' id='consume' name='consume_lkm' placeholder='введите рассход'></input>
          <p>л./100км</p>
          <p class='note'>{errorInfo(isConsume, consume)}</p>
        </div> */}

        {/* BLOCK PRICE */}
        {/* <div class='name'>
          <label for='price'>Стоимость 1 л. топлива</label>
        </div> 
        <div class='input-field'>
          <input onBlur={(e) => {setIsPrice(isDigitValue(e)) ? setPrice(getDigitValue(e)) : setPrice(0)}} type='text' id='price' name='price_uah' placeholder='введите цену'></input>
          <p>грн/літр</p>
          <p class='note'>{errorInfo(isPrice, price)}</p>
        </div> */}

        {/* BUTTON */}
        <div class='input-field' style={{marginTop: 25 + 'px'}}>
          <button type='button' name='cost' form='fuel-calculation'>Рассчитать</button>
          <p class='cost' style={{width: 50 + '%'}}>UAH</p>
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
  console.log(exp.test(e.target.value));

  return exp.test(e.target.value);
}

const getDigitValue = (e) => {
  console.log(parseFloat(e.target.value));
  return parseFloat(e.target.value);
}

export default App;