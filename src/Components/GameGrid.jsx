import { useEffect } from "react";
import Grid from "@mui/material/Grid";
import CardElement from "./CardElement";
import CardElementFlip from "./CardElementFlip";
import { CardGameContext } from "../App";
import { useContext } from "react";

const GameGrid = () => {
  const {
    difficulty,
    cardOrder
  } = useContext(CardGameContext)

  return (
    <Grid container spacing={{ xs: 2 }}>
      {cardOrder.map((letter, index) => (
        <Grid item xs={4} sm={3} md={2} key={index}>
          {difficulty === "easy" ? 
            <CardElement letter={letter} />
          :
            <CardElementFlip letter={letter} />
        }
        </Grid>
      ))}
    </Grid>
  );
}

export default GameGrid
