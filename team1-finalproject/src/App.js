import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './css/App.css';
import Home from './components/Home';
import Navbar from './components/NavBar';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar/>
        <Header/>
        <Routes>
          <Route path = "/" element= {<Home/>}/>
          <Route path = "/home" element= {<Home/>}/>
          <Route path = "/about" element= {<About/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
