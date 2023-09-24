
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Pages/Home';
import About from './components/About/About';
import Gallery from './components/gallery/gallery'
import Destination from './components/Destination/Home'
import SinglePage from './components/SinglePage/SinglePage';
import Blog from './components/Blog/Blog';
import BlogSingle from './components/Blog/BlogSingle'
import Testimoial from './components/Testimoial/Testimoial'
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import Registrer from './components/Login/Registrer';
import { BrowserRouter as Router , Route , Switch , Link } from 'react-router-dom/cjs/react-router-dom.min';








function App() {
  return (
    <div className="App">
     
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/about' exact component={About}></Route>
          <Route path='/Gallery' exact component={Gallery}></Route>
          <Route path='/destination' exact component={Destination}></Route>
          <Route path='/singlepage/:id' exact component={SinglePage}></Route>
          <Route path='/blog' exact component={Blog}></Route>
          <Route path='/blogSingle/:id' exact component={BlogSingle}></Route>
          <Route path='/testimonial' exact component={Testimoial}></Route>
          <Route path='/contact' exact component={Contact}></Route>
          <Route path='/Sign-in' exact component={Login}></Route>
          <Route path='/Register' exact component={Registrer}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
