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
import Batman from './components/Pages/Batman';
import Spiderman from './components/Pages/Spiderman';
import Sonic from './components/Pages/Sonic';
import Uncharted from './components/Pages/Uncharted';
import DoctorStrange from './components/Pages/DoctorStrange';
import Minions from './components/Pages/Minions';
import OperationMincemeat from './components/Pages/OperationMincemeat';
import SuperPets from './components/Pages/SuperPets';


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
          <Route path="listing-gallery/batman" element= {<Batman/>}/>
          <Route path="/listing-gallery/spider-man-no-way-home" element= {<Spiderman/>}/>
          <Route path="/listing-gallery/sonic-the-hedgehog-2" element= {<Sonic/>}/>
          <Route path="/listing-gallery/uncharted" element= {<Uncharted/>}/>
          <Route path="/newreleasegallery/doctor-strange-in-the-multiverse-of-madnes" element= {<DoctorStrange/>}/>
          <Route path="/newreleasegallery/minions-the-rise-of-gru" element= {<Minions/>}/>
          <Route path="/newreleasegallery/operation-mincemeat" element= {<OperationMincemeat/>}/>
          <Route path="/newreleasegallery/dc-league-of-super-pets" element= {<SuperPets/>}/>

          
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
