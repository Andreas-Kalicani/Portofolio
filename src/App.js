
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Portofolio from './components/portofolio/Portofolio';
import Service from './components/service/Service';
import Testimonials from './components/testimonials/Testimonials';

function App() {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Service />
        <Portofolio />
        <Testimonials />
        <Contact />
        <Footer />

    
    </>
  );
}

export default App;
