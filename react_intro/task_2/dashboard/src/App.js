import logo from './holberton_logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  const handleClick = (e) => {
    const inputId = e.target.htmlFor;
    document.getElementById(inputId).focus();
  }

  return (
    <div className="App">
      <div className="App-header">
        <img src={ logo } alt="Holberton-logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access to the full dashboard</p>
        <div className="Login">
          <label htmlFor="email" onClick={handleClick}>Email:</label>
          <input type="email" id="email"/>
          <label htmlFor="password" onClick={handleClick}>Password:</label>
          <input type="passwrod" id="password"/>
          <button type="button">OK</button>
        </div>
      </div>
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
    </div>
  );
}

export default App;
