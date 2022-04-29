import { useEffect, useState, useContext } from "react";
import { CardGameContext } from "./CardGames";
import { useParams } from "react-router-dom"

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import ReactCardFlip from 'react-card-flip';

const CardElementFlip2 = props => {

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
  const [flipped, setFlipped] = useState(true)

  const selectCard = e => {
    if (selectedCard === null) {
      setLetterDict({...letterDict, [props.letter]: { active: true, show: true }})
      setSelectedCard(props.letter)
    } else {
      if (props.letter === selectedCard) {
        setLetterDict({...letterDict, [props.letter]: { active: false, show: true}})
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
    //selected ? setSelected(false) : setSelected(true)
  }

  const afterGuess = r => {
    setSelectedCard(null)
    setTwoSelected(false)
    setLetterDict({...letterDict, [props.letter]: { active: true, show: true}, [selectedCard]: { active: true, show: true}})
    setTimeout( () => {
      if ( r ) {
        setLetterDict({...letterDict, [props.letter]: { active: true, show: false}, [selectedCard]: { active: true, show: false}})
        let newActivePairs = activePairs.filter( item => item !== props.letter && item !== selectedCard)
        setActivePairs(newActivePairs)
      } else {
        setLetterDict({...letterDict, [props.letter]: { active: false, show: true }, [selectedCard]: { active: false, show: true }})
      }
    }, 200)
  }

  const rotateCard = (e) => {
    setFlipped(!flipped)
  }

  return (
    <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
      <Box onClick={rotateCard}>
        <CardMedia
          sx={{ boxShadow: '2px 2px 2px grey' }}
          component="img"
          image="/images/card-back.png"
          alt="a"
        />
      </Box>
      <Box sx={{position: 'relative', alignItems:"center"}} onClick={rotateCard}>
        {props.letter.length === 1 ?
          <CardMedia
            sx={{ boxShadow: '2px 2px 2px grey', position: 'absolute' }}
            component="img"
            image={imageURL}
            alt="a"
          />
          :
          <Box sx={{position: 'relative', alignItems:"center"}}>
            <CardMedia
              sx={{ boxShadow: '2px 2px 2px grey' }}
              component="img"
              image="/images/white-card-background.png"
              alt="a"
            />
            <Typography 
               sx={{position: 'absolute', top: '25%', alignItems:"center"}} variant="h3" 
            >
              {props.letter.slice(0,1)}
            </Typography>
          </Box>
        }
      </Box>
    </ReactCardFlip>
  );
}

export default CardElementFlip2
