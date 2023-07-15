// import logo from './logo.svg';

import './App.css';
import AboutUs from './components/AboutUs';
import Areas from './components/Areas';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Joinus from './components/Joinus';
// import Mentor from './components/Mentor';
import Testimonial from './components/Testimonial';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <AboutUs />
      <Areas/>
      <Joinus/>
      <Testimonial/>
      <Footer/>
      
    </div>
  );
}

export default App;
