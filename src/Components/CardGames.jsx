import { useEffect, useState, useRef } from "react";
import GameGrid from './GameGrid';
import { createContext } from "react";
import getLetterGroup from "../data/letter-groups.jsx"
import { shuffleArray } from "../utils"
import { useParams, useNavigate } from "react-router-dom"

export const CardGameContext = createContext();

const CardGames = props => {
  const [selectedCard, setSelectedCard] = useState(null)
  const [twoSelected, setTwoSelected] = useState(false)
  const [letterDict, setLetterDict] = useState({})
  const [cardOrder, setCardOrder] = useState([])
  const [activePairs, setActivePairs] = useState([])
  const [startTime, setStartTime] = useState(performance.now())
  const [imageURLPrefix, setImageURLPrefix] = useState('')

  const initialMount = useRef(true)
  const navigate = useNavigate();
  let params = useParams();
  console.log('params:', params)

  useEffect(() => {
    if (initialMount.current) {
      initialMount.current = false;
      resetGame();
    } else {
      if (activePairs.length === 0) {
        let timeTaken = (performance.now() - startTime) / 1000
        setTimeout(() => {
        alert('you finished in: ' + timeTaken.toString() + " seconds")
          resetGame()
          navigate('/')
        }, 300)
      }
    }
  }, [activePairs])

  const resetGame = () => {

    let letterArray = getLetterGroup(params.game, params.imageType, 7)
    let tempLetterDict = {}
    let tempActivePairs = []
    setStartTime(performance.now())
    letterArray.forEach(l => {
      tempActivePairs.push(l)
      tempLetterDict[l] = {
        active : false,
        show: true,
      }
      tempLetterDict[l + '_l'] = {
        active : false,
        show: true,
      }
    })
    if (params.imageType === "drawing") {
      setImageURLPrefix("/images/drawn-alphabet-images/isl-drawn-")
    } else {
      setImageURLPrefix("/images/photo-alphabet-images/isl-photo-")
    }

    setLetterDict(tempLetterDict);
    setActivePairs(tempActivePairs);
    setCardOrder(shuffleArray(Object.keys(tempLetterDict)))
  }

  return (
      <CardGameContext.Provider
        value={{
          letterDict,
          setLetterDict,
          cardOrder,
          selectedCard,
          setSelectedCard,
          twoSelected,
          setTwoSelected,
          activePairs,
          setActivePairs,
          imageURLPrefix
        }}
      >
        <GameGrid />
      </CardGameContext.Provider>
  )
}

export default CardGames
