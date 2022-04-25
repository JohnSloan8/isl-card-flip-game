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
    console.log('activePairs:', activePairs)
    if (initialMount.current) {
      initialMount.current = false;
    } else {
      if (activePairs.length === 0) {
        let timeTaken = (performance.now() - startTime) / 1000
        console.log('timeTaken', timeTaken)
        alert('you finished in: ' + timeTaken.toString() + " seconds")
        resetGame()
      }
    }
  }, [activePairs])

  const resetGame = () => {
    console.log('setting Letter Dict')
    let letterArray = getLetterGroup("vowels")
    let tempLetterDict = {}
    let tempActivePairs = []
    letterArray.forEach(l => {
      tempActivePairs.push(l)
      tempLetterDict[l] = {
        active : false,
        class: "no-judgement",
        onclick: (e) => selectCard(props.letter)
      }
      tempLetterDict[l + '_l'] = {
        active : false,
        class: "no-judgement",
        onclick: (e) => selectCard(props.letter)
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
