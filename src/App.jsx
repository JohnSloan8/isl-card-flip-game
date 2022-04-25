import './App.css';
import ButtonAppBar from './Components/Navbar';
import CardGame from './Components/CardGame';
import Container from '@mui/material/Container';

const App = () => {
  return (
    <div className="App">
      <Container maxWidth="md" sx={{height: '100%'}}>
        <Container sx={{marginTop: '20%'}}>
          <CardGame />
        </Container>
      </Container>
    </div>
  )
}

export default App
