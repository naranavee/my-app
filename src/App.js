import { createContext } from 'react';
import './App.css';
import ComponentC from './hooks/useContext/ComponentC';
import CounterTwo from './hooks/useReducer/CounterTwo';


export const ThemeContext = createContext(null);

function App() {
  return (
    <div className="App">
       <CounterTwo />
      
    </div>
  );
}

export default App;
