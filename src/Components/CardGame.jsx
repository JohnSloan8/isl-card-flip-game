import { useEffect, useState, useRef } from "react";
import GameGrid from './GameGrid';
import { createContext } from "react";
import getLetterGroup from "../data/letter-groups.jsx"
import { shuffleArray } from "../utils"

export const CardGameContext = createContext();

const CardGame = props => {
  const [selectedCard, setSelectedCard] = useState(null)
  const [twoSelected, setTwoSelected] = useState(false)
  const [letterDict, setLetterDict] = useState({})
  const [cardOrder, setCardOrder] = useState([])
  const [activePairs, setActivePairs] = useState([])
  const [startTime, setStartTime] = useState(performance.now())

  const initialMount = useRef(true)

  useEffect(() => {
    resetGame();
  }, [])

  useEffect(() => {
    if (initialMount.current) {
      initialMount.current = false;
    } else {
      if (activePairs.length === 0) {
        let timeTaken = (performance.now() - startTime) / 1000
        alert('you finished in: ' + timeTaken.toString() + " seconds")
        resetGame()
      }
    }
  }, [activePairs])

  const resetGame = () => {
    let letterArray = getLetterGroup("vowels", 9)
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
          setActivePairs
        }}
      >
        <GameGrid />
      </CardGameContext.Provider>
  )
}

export default CardGame
