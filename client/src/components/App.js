import Nav from './Nav';
import Home from './Home';
import About from './About';
import ProjectContainer from './ProjectContainer';
import Contact from './Contact';
import Footer from './Footer';



function App() {
  return (
    <>
      <Nav />
      <div id='app_container'>
        <Home />
        <About />
        <ProjectContainer />
        <Contact />
        <Footer />
      </div>

    </>
  );
}

export default App;
