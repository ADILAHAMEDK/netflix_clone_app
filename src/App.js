import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {orginals,action} from './Urls'

function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <RowPost url={orginals} title="Netflix Originals"/>
      <RowPost url={action} title="Action" isSmall/>
    </div>
  );
}

export default App;
