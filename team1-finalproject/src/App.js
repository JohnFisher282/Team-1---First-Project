import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './css/App.css';
import Home from './components/Home';
import Navbar from './components/NavBar';
import About from './components/About';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path = "/" element= {<Home/>}/>
          <Route path = "/home" element= {<Home/>}/>
          <Route path = "/about" element= {<About/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
