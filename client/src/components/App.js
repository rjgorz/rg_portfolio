import Nav from './Nav';
import Home from './Home';
import About from './About';

function App() {
  return (
    <>
      <Nav />
      <div id='app_container'>
        <Home />
        <About />
      </div>
    </>
  );
}

export default App;
