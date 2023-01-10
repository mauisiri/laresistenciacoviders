import './App.css';
import DataContainer from './components/DataContainer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>COVIDERS</h1>
        <DataContainer country='USA'/>
      </header>
    </div>
  );
};

export default App;
