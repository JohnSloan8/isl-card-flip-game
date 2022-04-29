import { useEffect, useState, useContext, useRef } from "react";
import { CardGameContext } from "./CardGames";
import { useParams } from "react-router-dom"

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

const CardElementFlip3 = props => {

  let ref = useRef()
  let params = useParams()

  const {
    letterDict,
    setLetterDict,
    selectedCard,
    setSelectedCard,
    twoSelected,
    setTwoSelected,
    activePairs,
    setActivePairs,
    imageURLPrefix
  } = useContext(CardGameContext)

  let imageURL = imageURLPrefix + props.letter + ".png"

  //const [selected, setSelected] = useState(false)
  const [showCard, setShowCard] = useState(true)
  let reset = false;

  const selectCard = e => {
    console.log('ref:', ref)
    if (!reset) { 
      if (selectedCard === null) {
        //setLetterDict({...letterDict, [props.letter]: { active: true, show: true }})
        setSelectedCard(e.target.id)
      } else {
        if (e.target.id === selectedCard) {
          //setLetterDict({...letterDict, [props.letter]: { active: false, show: true}})
          setSelectedCard(null)
        } else {
          setTwoSelected(true)
          let result = false
          if (props.letter.slice(0,1) === selectedCard.slice(0,1)) {    
            result = true
          }
          afterGuess(result)
        }
      }
    } else {
      reset = false
    }
  }

  const afterGuess = (r) => {
    //setSelectedCard(null)
    //setTwoSelected(false)
    console.log('in afterGuess')
    setTimeout( () => {
      if ( r ) {
        document.getElementById(props.letter).style.visibility = "hidden"
        document.getElementById(selectedCard).style.visibility = "hidden"
        let newActivePairs = activePairs.filter( item => item !== props.letter && item !== selectedCard)
        setActivePairs(newActivePairs)
      } else {
        reset = true
        document.getElementById(props.letter).click()
        document.getElementById(selectedCard).click()
      }
    }, 1000)
  }

  return (
    <Flippy
      flipOnHover={false} // default false
      flipOnClick={true} // default false
      flipDirection="horizontal" // horizontal or vertical
      ref={ref}
      onClick={selectCard}
    >
      <FrontSide>
        <CardActionArea 
          style={{ height: '100%' }}
        >
          <CardMedia
            component="img"
            image="/images/card-back.png"
            alt="a"
            id={props.letter}
          />
        </CardActionArea>
      </FrontSide>
      <BackSide>
        <CardActionArea 
          style={{ height: '100%' }}
        >
        {props.letter.length === 1 ?
          <CardMedia
            component="img"
            image={imageURL}
            alt="a"
          />
        :
        <Box>
          <Typography align='center' variant='h3'>{props.letter.slice(0,1)}</Typography>
        </Box>
        }
        </CardActionArea>
    </BackSide>
  </Flippy>
  );
}

export default CardElementFlip3
