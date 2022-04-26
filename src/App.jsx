import './App.css';
import Navbar from './Components/Navbar';
import CardGames from './Components/CardGames';
import Dashboard from './Components/Dashboard';
import Container from '@mui/material/Container';
import {
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Navbar sx={{zIndex: 100}} />
      <Container maxWidth="md" sx={{top: 0, zIndex:1}}>
        <Container sx={{marginTop: '20%'}}>
          <Routes>
            <Route path="cardgames/:imageType/:game" element={<CardGames />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </Container>
      </Container>
    </div>
  )
}

export default App
