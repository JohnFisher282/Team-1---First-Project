import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './css/App.css';
import Home from './components/Pages/Home';
import Navbar from './components/Elements/NavBar';
import About from './components/Pages/About';
import Footer from './components/Elements/Footer';
import Header from './components/Elements/Header';
import ListingGallery from './components/Pages/ListingGallery';
import Search from './components/Pages/Search';


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
          <Route path = "/listing-gallery" element= {<ListingGallery/>}/>
          <Route path = "/search" element= {<Search/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
