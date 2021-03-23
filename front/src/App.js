import logo from './logo.png';

import './App.css';
import ItuneApi from './components/ItuneApi';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ItuneApi></ItuneApi>
      </header>
    </div>
  );
}

export default App;
