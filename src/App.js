import './App.css';
import './fuel-calculator.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

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
    </div>

  );
}

export default App;
