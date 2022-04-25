import { useEffect, useState, useContext } from "react";
import { CardGameContext } from "./CardGame";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';

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
  const [cardClass, setCardClass] = useState("cardBorderWhite")

  const selectCard = e => {
    if (selectedCard === null) {
      setLetterDict({...letterDict, [props.letter]: { class: "no-judgement", active: true}})
      setSelectedCard(props.letter)
    } else {
      if (props.letter === selectedCard) {
        setLetterDict({...letterDict, [props.letter]: { class: "no-judgement", active: false}})
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
    let outcome = "incorrect";
    if ( r ) {
      outcome = "correct";
    }
    setLetterDict({...letterDict, [props.letter]: { class: outcome, active: true}, [selectedCard]: { class: outcome, active: true}})
    setTimeout(() => {
      setSelectedCard(null)
      setTwoSelected(false)
      if ( r ) {
        setLetterDict({...letterDict, [props.letter]: { class: "removed", active: false}, [selectedCard]: { class: "removed", active: false}})
        let newActivePairs = activePairs.filter( item => item !== props.letter && item !== selectedCard)
        setActivePairs(newActivePairs)
      } else {
        setLetterDict({...letterDict, [props.letter]: { class: "no-judgement", active: false}, [selectedCard]: { class: "no-judgement", active: false}})
      }
    }, 300)
  }

  return (
    <Card 
      sx={{height: '100%'}}
      elevation={letterDict[props.letter]["active"] ? 24 : 1}
      //onClick={twoSelected ? null : (e) => selectCard(props.letter)}
      onClick={(e) => selectCard(props.letter)}
      className={letterDict[props.letter]["class"] }
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
  );
}

export default CardElement
