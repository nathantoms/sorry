import './App.css';
import {Route, Link, Routes, useLocation, useSearchParams} from 'react-router-dom';
import './components/SorryForm';
import Sorry from './components/Sorry';

function App() {
  // const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <Home />
    </>
    // <>
    //   <Routes>
    //     <Route path="/nt-admin" element={<></>} />
    //     <Route path="/" element={<Home />} />
    //   </Routes>
    // </>
  );
}

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>We're sorry.</h1>
        <Sorry />
        {/* <SorrySplash /> */}
      </header>
    </div>
  );
}

export default App;
