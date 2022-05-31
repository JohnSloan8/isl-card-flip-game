import { useEffect, useRef } from "react";
import Grid from "@mui/material/Grid";
import CardElement from "./CardElement";
import CardElementFlip from "./CardElementFlip";
import { CardGameContext } from "../App";
import { useContext } from "react";
import Container from '@mui/material/Container';
import { gsap } from 'gsap'

const GameGrid = () => {
  const {
    difficulty,
    cardOrder
  } = useContext(CardGameContext)

  let genieImageURL = "/assets/images/genie-cropped.png"
  let lampImageURL = "/assets/images/lamp-cropped.png"

  const lampRef = useRef()
  const genieRef = useRef()

  const shakeLamp = () => {
    let randomXShake =  1 + Math.random() * 2;
    let randomYShake = 1 + Math.random() * 2;
    let shakeTween = gsap.timeline({ repeat: 5, repeatDelay: 0 });
    shakeTween.to(lampRef.current, {x: randomXShake, y: randomYShake, duration: 0.025})
    shakeTween.to(lampRef.current, {x: -randomXShake, y: -randomYShake, duration: 0.05})
    shakeTween.to(lampRef.current, {x: 0, y: 0, duration: 0.025})
  }

  const genieAppear = () => {
    genieRef.current.hidden = false
    let genieAppearTween = gsap.timeline();
    genieAppearTween.fromTo(genieRef.current, {scale: 0, y:'25%', x:'5%'}, {scale: 1.5, y: '-35%', x:'0%'})
  }

  return (
    <>
      <Container align="center" maxWidth="md" sx={{ paddingTop: '3vh' }}>
        <Grid container spacing={{ xs: 2 }}>
          {cardOrder.map((letter, index) => (
            <Grid item xs={4} sm={3} md={2} key={index}>
              {difficulty === "easy" ? 
                <CardElement letter={letter} shakeLamp={shakeLamp} genieAppear={genieAppear} />
              :
                <CardElementFlip letter={letter} shakeLamp={shakeLamp} genieAppear={genieAppear} />
            }
            </Grid>
          ))}
        </Grid>
      </Container>
      <div 
        className="lamp-container"
        onClick={shakeLamp}
      >
        <img 
          className="genie-lamp"
          id="lamp"
          src={lampImageURL}
          ref={lampRef}
        />
        <img 
          className="genie-lamp"
          id="genie"
          src={genieImageURL}
          ref={genieRef}
          hidden
        />
      </div>
    </>
  );
}

export default GameGrid
