import { useEffect, useState, useContext, useRef } from "react";
import { CardGameContext } from "../App";
import { useParams } from "react-router-dom"

const CardElementFlip4 = props => {

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
  let backImageURL = "/images/card-back-" + params.imageType + ".png"
  const flipCard = () => {
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
    }, 1000)
  }

  return (
    <div className={`card card-dimensions ${letterDict[props.letter]["show"] ? 'show-card' : 'hide-card'}`}>
			<div 
				className={`card__inner ${ letterDict[props.letter]["active"] ? '' : 'is-flipped' }`}
				onClick={flipCard}
			>
			<div className="card__face card__face--front">
				<img 
					src="/images/card-front.png" 
					className="card-dimensions front-image"
				/>
        {props.letter.length === 1 ?
					<img 
						src={imageURL} 
						className="card-dimensions"
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
  );
}

export default CardElementFlip4
