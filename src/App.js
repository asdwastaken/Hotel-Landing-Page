import { useRef } from 'react';
import './App.css';
import Accommodations from './Components/Accommodations/Accommodations';
import Footer from './Components/Footer/Footer';
import FrontPage from './Components/FrontPage/FrontPage';
import Home from './Components/Home/Home';
import InThePress from './Components/InThePress/InThePress';
import Promos from './Components/Promos/Promos';
import RoomFrontPage from './Components/RoomFrontPage/RoomFrontPage';

function App() {

  const homeRef = useRef();
  const videoRef = useRef();

  return (
    <div className="App">
      <header className="App-header">
        <FrontPage homeRef={homeRef} videoRef={videoRef} />
      </header>

      <main>
        <Home homeRef={homeRef} />
        <Accommodations />
        <RoomFrontPage />
        <Promos />
        <InThePress />
        <Footer />
      </main>

    </div>
  );
}

export default App;
