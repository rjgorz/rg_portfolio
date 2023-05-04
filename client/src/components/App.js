import Nav from './Nav';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import ProjectContainer from './ProjectContainer';

function App() {
  return (
    <>
      <Nav />
      <div id='app_container'>
        <Home />
        <About />
        <ProjectContainer />
        <Contact />
      </div>
    </>
  );
}

export default App;
