import './App.css';

function App() {
  return (
    <div>
      <header>

        <div className="Avatar">
          <img src="/public/Malebo-Sambo.jpg" alt="Selfie" ></img>
        </div>
        <p>
          Malebo Sambo Portfolio
        </p>
        <p>
          View my projects on GitHub <a href="https://github.com/malebosambo">here</a>
        </p>
        
        <div className="Container">
          <div className="Buttton">
            <input type="submit" value="Networking"></input>
          </div>
          <div className="Button">
            <input type="submit" value="Websites"></input>
          </div>
          <div className="Button">
            <input  type="submit" value="Mobile Apps"></input>
          </div>
          <div className="Button">
          <input  type="submit" value="IoT"></input>
          </div>
        </div>

      </header>
    </div>
  );
}

export default App;
