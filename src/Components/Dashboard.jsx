import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { useNavigate } from "react-router-dom"
import { CardGameContext } from "../App";
import { useContext } from "react";
import getLetterGroup from "../data/letter-groups.jsx"
import { shuffleArray } from "../utils"

export default function Dashboard() {

  const {
    difficulty,
    setDifficulty,
    imageType,
    setImageType,
    gameType,
    setGameType,
    setStartTime,
    setImageURLPrefix,
    setLetterDict,
    setActivePairs,
    setCardOrder
  } = useContext(CardGameContext)

  const changeDifficulty = (event) => {
    setDifficulty(event.target.value);
  };

  const changeImageType = (event) => {
    setImageType(event.target.value);
    if (event.target.value === "photo") {
      document.getElementById('moving consonants').style.visibility = "hidden"
    } else {
      document.getElementById('moving consonants').style.visibility = "visible"
    }
  };

  const changeGameType = (event) => {
    setGameType(event.target.value);
  };

  const navigate = useNavigate();
  const startGame = () => {
    resetGame()
    navigate(`/cardgame/${difficulty}/${imageType}/${gameType.replace(/\s/g, '_')}`)
  }

  const gameTypes = ["vowels", "static consonants", "moving consonants", "all"];

  const resetGame = () => {

    console.log('gameType:', gameType)
    console.log('imageType:', imageType)
    let letterArray = getLetterGroup(gameType.replace(/\s/g, '_'), imageType, 7)
    console.log('letterArray', letterArray)
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
    if (imageType === "drawing") {
      setImageURLPrefix("/images/drawn-alphabet-images/isl-drawn-")
    } else {
      setImageURLPrefix("/images/photo-alphabet-images/isl-photo-")
    }

    setLetterDict(tempLetterDict);
    setActivePairs(tempActivePairs);
    setCardOrder(shuffleArray(Object.keys(tempLetterDict)))
  }

  return (
    <Container align="center" maxWidth="xs" sx={{ padding: '8vw' }}>
      <FormControl>
        <FormLabel>Difficulty</FormLabel>
        <Select
          value={difficulty}
          defaultValue={difficulty}
          onChange={changeDifficulty}
        >
          <MenuItem key='easy' value='easy'>easy</MenuItem>
          <MenuItem key='hard' value='hard'>hard</MenuItem>
        </Select>
      </FormControl>
      <br />
      <FormControl className="main-form">
        <FormLabel>Image Type</FormLabel>
        <Select
          value={imageType}
          defaultValue={imageType}
          onChange={changeImageType}
        >
          <MenuItem key='drawing' value='drawing'>drawing</MenuItem>
          <MenuItem key='photo' value='photo'>photo</MenuItem>
        </Select>
      </FormControl>
      <br />
      <FormControl className="main-form">
        <FormLabel>Letter Group</FormLabel>
        <RadioGroup
          value={gameType}
          defaultValue={gameType}
          name="radio-buttons-group"
          onChange={changeGameType}
        >
          {gameTypes.map((game) =>
            <FormControlLabel key={game} id={game} value={game} control={<Radio />} label={game} />
          )}
        </RadioGroup>

      </FormControl>
      <br />
      <Button className="main-form" variant="contained" onClick={startGame}>Start Game</Button>
    </Container>
  );
}
