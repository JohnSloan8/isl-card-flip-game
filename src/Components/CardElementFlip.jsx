import { useEffect, useState, useContext, useRef } from "react";
import { CardGameContext } from "../App";
import { useParams } from "react-router-dom"
import Fade from '@mui/material/Fade';

const CardElementFlip = props => {

  const params = useParams()

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
  let backImageURL = "/assets/images/card-back-" + params.imageType + ".png"
  console.log('backImageURL:', backImageURL)
  const flipCard = () => {
    if (!twoSelected) {
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
    }

  }

  const afterGuess = r => {
    setSelectedCard(null)
    setLetterDict({...letterDict, [props.letter]: { active: true, show: true}, [selectedCard]: { active: true, show: true}})
    let showTime = r ? 500 : 1000
    setTimeout( () => {
      setTwoSelected(false)
      if ( r ) {
        setLetterDict({...letterDict, [props.letter]: { active: true, show: false}, [selectedCard]: { active: true, show: false}})
        let newActivePairs = activePairs.filter( item => item !== props.letter && item !== selectedCard)
        setActivePairs(newActivePairs)
      } else {
        setLetterDict({...letterDict, [props.letter]: { active: false, show: true }, [selectedCard]: { active: false, show: true }})
      }
    }, showTime)
  }

  return (

    <Fade in={letterDict[props.letter].show} timeout={500}>
      <div className="card card-dimensions">
        <div 
          className={`card__inner ${ letterDict[props.letter]["active"] ? '' : 'is-flipped' }`}
          onClick={flipCard}
        >
          <div className={`card__face card__face--front ${params.imageType === "photo" ? "dark-card-letter" : "light-card-letter"}`}>
            <img 
              src="/assets/images/card-front.png" 
              className="card-dimensions front-image"
            />
            {props.letter.length === 1 ?
              <img 
                src={imageURL} 
                className="card-dimensions"
                alt="none here"
              />
              :
              <h1>{props.letter.slice(0,1)}</h1>
              }
          </div>
          <div className="card__face card__face--back">
            <img 
              src={backImageURL} 
              className="card-dimensions"
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default CardElementFlip
