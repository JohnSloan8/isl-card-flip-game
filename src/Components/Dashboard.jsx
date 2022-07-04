import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import { useNavigate } from "react-router-dom";
import { CardGameContext } from "../App";
import { useContext } from "react";
import getLetterGroup from "../data/letter-groups.jsx";
import { shuffleArray } from "../utils";

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
    setCardOrder,
  } = useContext(CardGameContext);

  const changeDifficulty = (event) => {
    setDifficulty(event.target.value);
  };

  const changeImageType = (event) => {
    setImageType(event.target.value);
  };

  const changeGameType = (event) => {
    setGameType(event.target.value);
  };

  const navigate = useNavigate();
  const startGame = () => {
    resetGame();
    // navigate(`/cardgame/${difficulty}/${imageType}/${gameType}`);
    navigate("/cardgame");
  };

  const gameTypes = [
    "vowels",
    "non_moving_consonants",
    "moving_consonants",
    "all",
  ];

  const resetGame = () => {
    let letterArray = getLetterGroup(gameType, imageType, 7);
    let tempLetterDict = {};
    let tempActivePairs = [];
    setStartTime(performance.now());

    letterArray.forEach((l) => {
      console.log("letter:", l);
      tempActivePairs.push(l);
      tempLetterDict[l] = {
        active: false,
        show: true,
      };
      tempLetterDict[l + "_l"] = {
        active: false,
        show: true,
      };
    });
    if (imageType === "drawing") {
      setImageURLPrefix("/assets/images/drawn-alphabet-images/isl-drawn-");
    } else {
      setImageURLPrefix("/assets/images/photo-alphabet-images/isl-photo-");
    }

    setLetterDict(tempLetterDict);
    setActivePairs(tempActivePairs);
    setCardOrder(shuffleArray(Object.keys(tempLetterDict)));
  };

  return (
    <Container align="center" maxWidth="xs" sx={{ padding: "6vh" }}>
      <FormControl>
        <FormLabel>
          <Typography variant="h6">Difficulty</Typography>
        </FormLabel>
        <Select
          value={difficulty}
          defaultValue={difficulty}
          onChange={changeDifficulty}
          sx={{ width: "160px" }}
        >
          <MenuItem key="easy" value="easy">
            easy
          </MenuItem>
          <MenuItem key="hard" value="hard">
            hard
          </MenuItem>
        </Select>
      </FormControl>
      <br />
      <FormControl className="main-form">
        <FormLabel>
          <Typography variant="h6">Image Type</Typography>
        </FormLabel>
        <Select
          value={imageType}
          defaultValue={imageType}
          onChange={changeImageType}
          sx={{ width: "160px" }}
        >
          <MenuItem key="drawing" value="drawing">
            drawing
          </MenuItem>
          <MenuItem key="photo" value="photo">
            photo
          </MenuItem>
        </Select>
      </FormControl>
      <br />
      <FormControl className="main-form">
        <FormLabel>
          <Typography variant="h6">Letter Group</Typography>
        </FormLabel>
        <RadioGroup
          value={gameType}
          defaultValue={gameType}
          name="radio-buttons-group"
          onChange={changeGameType}
        >
          {gameTypes.map(
            (game) =>
              (game !== "moving_consonants" || imageType !== "photo") && (
                <FormControlLabel
                  key={game}
                  id={game}
                  value={game}
                  control={<Radio />}
                  label={
                    <Typography variant="p">
                      {game.replaceAll("_", " ")}
                    </Typography>
                  }
                />
              )
          )}
        </RadioGroup>
      </FormControl>
      <Box>
        <Button
          className="main-form"
          variant="contained"
          size="large"
          onClick={startGame}
        >
          Start Game
        </Button>
      </Box>
    </Container>
  );
}
