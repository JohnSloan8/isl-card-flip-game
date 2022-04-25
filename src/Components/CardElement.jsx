import { useEffect, useState, useContext } from "react";
import { CardGameContext } from "./CardGame";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';

const CardElement = props => {

  const {
    letterDict,
    setLetterDict,
    selectedCard,
    setSelectedCard,
    twoSelected,
    setTwoSelected,
    activePairs,
    setActivePairs
  } = useContext(CardGameContext)

  let imageURL = "/images/drawn-alphabet-images/isl-drawn-" + props.letter + ".png"

  //const [selected, setSelected] = useState(false)
  const [showCard, setShowCard] = useState(true)

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
    if ( r ) {
      setLetterDict({...letterDict, [props.letter]: { active: false, show: false}, [selectedCard]: { active: false, show: false}})
      let newActivePairs = activePairs.filter( item => item !== props.letter && item !== selectedCard)
      setActivePairs(newActivePairs)
    } else {
      setLetterDict({...letterDict, [props.letter]: { active: false, show: true }, [selectedCard]: { active: false, show: true }})
    }
  }

  return (
    <Fade in={letterDict[props.letter].show} timeout={500}>
      <Card 
        sx={{height: '100%'}}
        elevation={letterDict[props.letter]["active"] ? 24 : 1}
        onClick={letterDict[props.letter].show ? (e) => selectCard(props.letter) : null }
      >
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
            <CardContent>
              <Typography variant="h3" component="div" align="center">
                {props.letter.slice(0,1)}
              </Typography>
            </CardContent>
          }
        </CardActionArea>
      </Card>
    </Fade>
  );
}

export default CardElement
