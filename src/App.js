import { createContext } from 'react';
import './App.css';
import ComponentC from './hooks/useContext/ComponentC';


export const ThemeContext = createContext(null);

function App() {
  return (
    <div className="App">
       <ThemeContext.Provider value="dark">
        <ComponentC />
      </ThemeContext.Provider>
      
    </div>
  );
}

export default App;
