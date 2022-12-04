import './App.css';
import './components/SorryForm';
import SorryForm from './components/SorryForm';
import SorrySplash from './components/SorrySplash';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>We're sorry.</h1>
        <SorryForm />
        {/* <SorrySplash /> */}
      </header>
    </div>
  );
}

export default App;
