import './App.css';
import ButtonAppBar from './Components/Navbar';
import CardGame from './Components/CardGame';
import Dashboard from './Components/Dashboard';
import Container from '@mui/material/Container';
import { Link } from "react-router-dom";
import {
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/dashboard">Dashboard</Link> |{" "}
        <Link to="/cardgame">Game</Link>
      </nav>
      <Container maxWidth="md" sx={{height: '100%'}}>
        <Container sx={{marginTop: '5%', border: '1px dashed black'}}>
          <Routes>
            <Route path="cardgame" element={<CardGame />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Routes>
        </Container>
      </Container>
    </div>
  )
}

export default App
