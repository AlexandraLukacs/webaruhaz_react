import { useContext } from 'react';
import Kosar from './components/Kosar';
import Vasarloter from './components/Vasarloter';
import { ApiContext } from './context/ApiContext';
import Public from './pages/Public';
import Urlap from './components/Urlap';
import Admin from './pages/Admin';


function App() {
  return (
    <div className="container">
      <header className="App-header">
        <h1>FakeStore webáruház</h1>
      </header>
      <Urlap />
    </div>
  );
}

export default App;
