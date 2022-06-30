import './App.css';
import PokeSearch from './PokeSearch';
import YelpSearch from './services/YelpSearch';

function App() {
  return (
    <div>
      <p>Find Your Pokemon!!!</p>
      <PokeSearch />
      <YelpSearch />
    </div>
  );
}

export default App;
