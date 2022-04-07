import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './css/App.css';
import Home from './components/Pages/Home';
import Navbar from './components/Elements/NavBar';
import About from './components/Pages/About';
import Footer from './components/Elements/Footer';
import Header from './components/Elements/Header';
import ListingGallery from './components/Pages/ListingGallery';
import Search from './components/Pages/Search';
import GettingThere from './components/Pages/GettingThere';
import PlacesToGo from './components/Pages/PlacesToGo';
import OpeningTime from './components/Pages/OpeningTime';
import EmailFormPage from './components/Pages/EmailFormPage';
import Screens from './components/Pages/Screens';
import SiteNavigation from './components/Pages/SiteNavigation';
import Classification from './components/Pages/Classification';
import DiscussionBoard from './components/Pages/DiscussionBoard';
import TicketBooking from './components/Pages/TicketBooking';
import Payment from './components/Pages/Payment';
import NewReleaseGallery from './components/Pages/NewReleaseGallery'
import ContactPage from './components/Pages/ContactPage';
import OtherPaypal from './components/Pages/OtherPaypal';


function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar/> <br></br>
        <Header/>
        <Routes>
          <Route path = "/" element= {<Home/>}/>
          <Route path = "/home" element= {<Home/>}/>
          <Route path = "/about" element= {<About/>}/>
          <Route path = "/listing-gallery" element= {<ListingGallery/>}/>
          <Route path = "/search" element= {<Search/>}/>
          <Route path = "/getting-there" element= {<GettingThere/>}/>
          <Route path = "/places-to-go" element= {<PlacesToGo/>}/>
          <Route path = "/opening-times" element= {<OpeningTime/>}/>
          <Route path = "/screens" element= {<Screens/>}/>
          <Route path = "/emailform" element= {<EmailFormPage/>}/>
          <Route path = "/site-navigation" element= {<SiteNavigation/>}/>
          <Route path = "/classification" element= {<Classification/>}/>
          <Route path = "/discussion-board" element= {<DiscussionBoard/>}/>
          <Route path = "/ticket-booking" element= {<TicketBooking/>}/>
          <Route path = "/payment" element= {<Payment/>}/>
          <Route path = "/newreleasegallery" element= {<NewReleaseGallery/>}/>
          <Route path = "/contactpage" element= {<ContactPage/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
