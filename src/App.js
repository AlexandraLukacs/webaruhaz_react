import { useContext } from 'react';
import Kosar from './components/Kosar';
import Vasarloter from './components/Vasarloter';
import logo from './logo.svg';
import { ApiContext } from './context/ApiContext';


function App() {
  const {termekLista}=useContext(ApiContext)
  return (
    <div className="container">
      <header className="App-header">
        <h1>FakeStore webáruház</h1>
      </header>
      <main className='row'>
        <aside className='col-lg-4'>
          <h4>Kosár</h4>
          <Kosar />
        </aside>
        <article className='col-lg-8 row'>
          <h4>Vásárlótér</h4>
          <Vasarloter termekLista={termekLista} />
        </article>
      </main>
    </div>
  );
}

export default App;