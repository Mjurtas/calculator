
import './App.css';
import calculate from './calculate'
import logic from './logic'
import {useState, useEffect, useContext} from 'react';
import Panel from './components/Panel';
import Display from './components/Display';
import Selector from './components/Selector'
import {ThemeContext} from './contexts';


function App() {


const themes = useContext(ThemeContext)

// States
const [state, setState] = useState({next: null, total: null, operator: null})
const [color, setColor] = useState("ios")
const [theme, setTheme] = useState({
  id: "ios",
  primaryColor: "rgb(77, 77, 77)",
  onClick: "rgb(39,39,39)",
  secondary: "rgb(221, 144, 0)",
  display: "linear-gradient(white 0%, rgb(189, 189, 189) 100%)"
 })

//UseEffects

useEffect(() => { 
  console.log(themes)
  setTheme(themes.filter(themes => themes.id === color)[0])
}, [color])

useEffect(() => {
  console.log(state)

}, [state])
//funcs

const clickHandler = (value) => {

  setState(logic(state, value))
  
  
}
  return (
    
  <ThemeContext.Provider value={theme}>
    <div className="App">
      <Selector className="selector" setColor={setColor} />
      <div className="calculator-container">
      <Display text={state.next || state.total || "0"}   />
      <Panel clickHandler={clickHandler} />
      </div>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
