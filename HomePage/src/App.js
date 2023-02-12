
import './App.css';
import Banner from './Components/Ban';
import Chat from './Components/Chat';
import CropState from './Components/CropState';
import Gov from './Components/Gov';
import Nav from './Components/Nav';

function App() {
  return (
    <div className='shit'>
      <div>
        <Nav />
      </div>

      <div>
        <Banner />
      </div>

      <div>
        <Gov />
      </div>

      <div>
        <CropState />
      </div>

      <div>
        <Chat />
      </div>
    </div>
  );
}

export default App;
