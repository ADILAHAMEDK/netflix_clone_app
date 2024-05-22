import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import {orginals,action,trending,ComedyMovies, HorrorMovies, RomanceMovies, Documentaries} from './Urls'

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <RowPost url={orginals} title="Netflix Orginal" />
      <RowPost url={action} title="Action" isSmall />
      <RowPost url={trending} title="Trending" isSmall />
      <RowPost url={ComedyMovies} title="Comedy Movies" isSmall />
      <RowPost url={HorrorMovies} title="Horror Movies" isSmall />
      <RowPost url={RomanceMovies} title="Romance Movies" isSmall />
      <RowPost url={Documentaries} title="Documentaries" isSmall />
    </div>
  );
}

export default App;
