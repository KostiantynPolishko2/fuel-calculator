import { useState } from 'react';
import './App.css';
import './fuel-calculator.css';

function App() {

  // disabled={isDistance? 'disabled' : ''}
  const [isDistance, setIsDistance] = useState(false);
  const [distance, setDistance] = useState(0);

  const [isConsume, setIsConsume] = useState(false);
  const [consume, setConsume] = useState(0);

  const [isPrice, setIsPrice] = useState(false);
  const [price, setPrice] = useState(0);

  const [cost, setCost] = useState(0);

  const setStateDistance = (e) => {
    if(isDigitValue(e)){ setIsDistance(true); setDistance(getDigitValue(e));}
    else{ setIsDistance(false); setDistance(0);}
  }
  
  const setStateConsume = (e) => {
    if(isDigitValue(e)){ setIsConsume(true); setConsume(getDigitValue(e));}
    else{ setIsConsume(false); setConsume(0);}
  }

  const setStatePrice = (e) => {
    if(isDigitValue(e)){ setIsPrice(true); setPrice(getDigitValue(e));}
    else{ setIsPrice(false); setPrice(0);}
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
          <input onBlur={setStateDistance} type='text' id='distance' name='distance_km' placeholder='введите километраж' autoFocus></input>
          <p>км</p>
          <p class='note'>{errorInfo(isDistance, distance)}</p>
        </div>

        {/* BLOCK AVERAGE CONSUMENION */}
        <div class='name'>
          <label for='consume'>Средний расход топлива</label>
        </div> 
        <div class='input-field'>
          <input onBlur={setStateConsume} type='text' id='consume' name='consume_lkm' placeholder='введите рассход' disabled={!isDistance? 'disabled' : ''}></input>
          <p>л./100км</p>
          <p class='note'>{errorInfo(isConsume, consume)}</p>
        </div>

        {/* BLOCK PRICE */}
        <div class='name'>
          <label for='price'>Стоимость 1 л. топлива</label>
        </div> 
        <div class='input-field'>
          <input onBlur={setStatePrice} type='text' id='price' name='price_uah' placeholder='введите цену' disabled={!isConsume? 'disabled' : ''}></input>
          <p>грн/літр</p>
          <p class='note'>{errorInfo(isPrice, price)}</p>
        </div>

        {/* BUTTON */}
        <div class='input-field' style={{marginTop: 25 + 'px'}}>
          <button onClick={() => setCost(calcCost(distance, consume, price))} type='button' name='cost' form='fuel-calculation' className={isPrice? '' : 'disabled'}>Рассчитать</button>
          <p class='cost' style={{width: 50 + '%'}}>{cost ? `${cost} UAH` : ''}</p>
        </div>

      </form>  
    </div>
  );
}

const calcCost = (distance, consume, price) => {
  return ((distance / 100) * consume * price).toFixed(2);
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