import { useEffect, useRef } from "react";
import Grid from "@mui/material/Grid";
import CardElement from "./CardElement";
import CardElementFlip from "./CardElementFlip";
import { CardGameContext } from "../App";
import { useContext } from "react";
import Container from '@mui/material/Container';
import { gsap } from 'gsap'
import timings from "../data/timings"
import { useNavigate } from "react-router-dom"

const GameGrid = () => {
  const {
    difficulty,
    gameType,
    cardOrder,
    startTime
  } = useContext(CardGameContext)

  const navigate = useNavigate();
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
    let timeTaken = (performance.now() - startTime) / 1000
    let genieScale = getGenieScale(timeTaken);
    let levelText = `
       all powerful: ${genieScale[1][0]}s
       strong: ${genieScale[1][1]}s
       normal: ${genieScale[1][2]}s
       weak: ${genieScale[1][2]}+s
    `
    genieRef.current.hidden = false
    let genieAppearTween = gsap.timeline();
    let scaleMult = 0.75 * ['weak', 'normal', 'strong', 'all powerful'].indexOf(genieScale[0]) + 0.5
    genieAppearTween.fromTo(genieRef.current, {scale: 0, y:'25%', x:'5%'}, {scale: scaleMult, y: '-175%', x:'0%'})
    setTimeout(() => {
    alert('Your time: ' +(Math.round(timeTaken*10)/10).toString() + " seconds" + '\n\n' + 'Genie strength: ' + genieScale[0] + '\n\n' + "Levels:" + '\n' + levelText)
      navigate('/')
    }, 1000)
  }

  const getGenieScale = (timeTaken) => {
    console.log('timeTaken:', timeTaken) 
    console.log('difficulty:', difficulty)
    console.log('gameType:', gameType)
    let timeLevels = timings[difficulty][gameType]
    console.log('timeLevels:', timeLevels) 
    let level = "weak"
    if (timeTaken < timeLevels[0]) {
      level = "all powerful"
    } else if (timeTaken < timeLevels[1]) {
      level = "strong"
    } else if (timeTaken < timeLevels[2]) {
      level = "normal"
    }
    return [level, timeLevels]
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
