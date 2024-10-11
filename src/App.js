import './index.css';

function App() {


  return (
    <div className="app">
      <div className='container'>
        <div className='header'>
          <div className='location'>
            <h2>Prague</h2>
          </div>
          <div className='temp'>
            <h1>23°C</h1>
          </div>
          <div className='description'>
            <p>Oblačno</p>
          </div>
        </div>
        <div>
          <div className='forecast'>
            <ul >

              <li className='bottom'>
                <h2>Pondělí</h2>
                <div className='date'>
                </div>
                <div className='forecast-temp'>
                  <p className='bold'>23°C</p>
                  <p>Teplota</p>
                </div>
                <div className='hummidity'>
                  <p className='bold'>90%</p>
                  <p>Vlhkost</p>
                </div>
                <div className='forecast-description'>
                  <p className='bold'>Oblačno</p>
                  <p>Stav</p>
                </div>
                <div className='feeling'>
                  <p className='bold'>25°C</p>
                  <p>Pocitová</p>
                </div>
              </li>

            </ul>
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
