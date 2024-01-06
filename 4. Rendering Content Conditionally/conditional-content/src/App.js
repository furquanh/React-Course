import logo from './logo.svg';
import './App.css';

import TermsOfUse from './components/TermsOfUse'
import Conditional from './components/conditional_elements'
import List from './components/list_rendering'

/*    
<div><Conditional isButton={false} config={{href:'http://www.furquanhassan.com'}} children={'My website'} /></div>
<div><Conditional isButton={true} config={{href:'http://www.furquanhassan.com'}} children={'My website'} /></div>
*/

function App() {
   
    const products = [{title:'apple', price:'$2'}, {title:'oranges', price:'$3'}, {title:'Kiwi', price:'$5'}]
    
  return (
      <>
        <List products={products} />
      </>
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