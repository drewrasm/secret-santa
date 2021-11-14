import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Randomizer from './pages/Randomizer'
import Header from './components/Header'
import './App.css';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/randomizer" element={<Randomizer/>}/>
      </Routes>
    </Router>
  );
}

export default App;
