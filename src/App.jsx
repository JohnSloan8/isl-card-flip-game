import './App.css';
import MainTitle from './Components/MainTitle';
import Dashboard from './Components/Dashboard';
import GameGrid from './Components/GameGrid';
import Container from '@mui/material/Container';
import {
  Routes,
  Route,
} from "react-router-dom";
import { ThemeProvider } from '@mui/material'
import aladdinTheme from './mui-theme'
import { createContext, useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom"

export const CardGameContext = createContext();

const App = () => {

  const [difficulty, setDifficulty] = useState('easy');
  const [imageType, setImageType] = useState('drawing');
  const [gameType, setGameType] = useState('vowels');
  const [selectedCard, setSelectedCard] = useState(null)
  const [twoSelected, setTwoSelected] = useState(false)
  const [letterDict, setLetterDict] = useState({})
  const [cardOrder, setCardOrder] = useState([])
  const [activePairs, setActivePairs] = useState([])
  const [startTime, setStartTime] = useState(performance.now())
  const [imageURLPrefix, setImageURLPrefix] = useState('')

  const initialMount = useRef(true)
  let params = useParams();

  useEffect(() => {
    if (initialMount.current) {
      initialMount.current = false;
      //resetGame();
    } else {
    }
  }, [activePairs])

  return (
      <CardGameContext.Provider
        value={{
          letterDict,
          setLetterDict,
          cardOrder,
          setCardOrder,
          selectedCard,
          setSelectedCard,
          twoSelected,
          setTwoSelected,
          activePairs,
          setActivePairs,
          difficulty,
          setDifficulty,
          imageURLPrefix,
          imageType,
          setImageType,
          gameType,
          setGameType,
          startTime,
          setStartTime,
          setImageURLPrefix
        }}
      >
      <ThemeProvider theme={aladdinTheme}>
          <div className="App">
            <MainTitle sx={{zIndex: 100}} />
            <Container maxWidth="md">
              <Routes>
                <Route path="cardgame/:difficulty/:imageType/:game" element={<GameGrid />} />
                <Route path="/" element={<Dashboard />} />
                <Route path="*" element={<p>nothing here</p>} />
              </Routes>
            </Container>
          </div>
      </ThemeProvider>
    </CardGameContext.Provider>
  )
}

export default App
