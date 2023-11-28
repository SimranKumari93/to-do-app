//import logo from './logo.svg';
import './App.css';
import Todolist from './components/Todolist';
import ToggleMode from './components/ToggleMode';
import DarkMode from './components/DarkMode';
import About from './components/About';

function App() {
  return (
    <>
    <Todolist/>
  <ToggleMode/>
  <DarkMode/>
  <About/>
    </>
  );
}

export default App;
