import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <p>
          Malebo Sambo Portfolio
        </p>
        <p>
          View my projects on GitHub <a href="https://github.com/malebosambo">here</a>
        </p>
        
        <div className="Container">
          <input className="Buttton" type="submit" value="Networking"></input>
          <input className="Button" type="submit" value="Websites"></input>
          <input className="Button" type="submit" value="Mobile Apps"></input>
          <input className="Button" type="submit" value="IoT"></input>
        </div>

      </header>
    </div>
  );
}

export default App;
