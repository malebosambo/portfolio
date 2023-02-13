import './App.css';
import homeContentCont from './components/homeContentCont'; 

function App() {
  return (
    <div>
    
      <div className="Container">
        <div className="Site_Nav">
          <div className="Title_Cont">
            <p className="Title">Malebo Sambo</p>
          </div>
          
          <div className="Menu_Cont">
            <button>Github</button>
            <button>Website</button>
            <button>Apps</button>
            <button>IoT</button>
            <button>Networking</button>
          </div>
        </div>
      </div>
      
      <homeContentCont />
    </div>
  );
}

export default App;