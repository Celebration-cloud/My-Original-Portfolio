import './App.css'
import NavBar from './The-Body/NavBar/NavBar';
import Slides from './The-Body/Slide/Slides';
import TheBody from './The-Body/TheBody';
import TheFooter from './The-Footer/TheFooter';

function App() {
  return (
    <>
      <NavBar/>
      <Slides/>
      <TheBody/>
      <hr className="but" />
      <TheFooter/>
    </>
  );
}

export default App
