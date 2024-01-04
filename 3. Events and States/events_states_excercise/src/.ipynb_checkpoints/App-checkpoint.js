import logo from './logo.svg';
import './App.css';
import EmailInput from './components/input_field'
import LoginForm from './components/multiple_state_input_field'
import LoginFormCombinedState from './components/combined_state_input_field'

function App() {
  return (
    <LoginFormCombinedState />
  );
}

export default App;

/*
<div className="App">
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>
</div>
*/

// <EmailInput />