import logo from './logo.jpg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello people!</p>
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <p>
                My name is Peter Griffin from Quahog!
              </p>
            </div>
            <div className="col-lg-6 col-12">
              <p>
                This developing fella asked me to be here.
              </p>
            </div>
          </div>
        </div>
        <button>asd</button>
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
  );
}

export default App;
