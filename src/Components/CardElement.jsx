import { useEffect, useState, useContext } from "react";
import { CardGameContext } from "../App";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";

const CardElement = (props) => {
  const {
    letterDict,
    setLetterDict,
    selectedCard,
    setSelectedCard,
    twoSelected,
    setTwoSelected,
    activePairs,
    setActivePairs,
    imageURLPrefix,
    imageType,
  } = useContext(CardGameContext);

  let imageURL = imageURLPrefix + props.letter + ".png";

  //const [selected, setSelected] = useState(false)
  const [showCard, setShowCard] = useState(true);

  const selectCard = (e) => {
    if (selectedCard === null) {
      setLetterDict({
        ...letterDict,
        [props.letter]: { active: true, show: true },
      });
      setSelectedCard(props.letter);
    } else {
      if (props.letter === selectedCard) {
        setLetterDict({
          ...letterDict,
          [props.letter]: { active: false, show: true },
        });
        setSelectedCard(null);
      } else {
        setTwoSelected(true);
        let result = false;
        if (props.letter.slice(0, 1) === selectedCard.slice(0, 1)) {
          result = true;
        }
        afterGuess(result);
      }
    }
    //selected ? setSelected(false) : setSelected(true)
  };

  // console.log('loaded ', props.letter)
  const afterGuess = (r) => {
    setSelectedCard(null);
    setTwoSelected(false);
    setLetterDict({
      ...letterDict,
      [props.letter]: { active: true, show: true },
      [selectedCard]: { active: true, show: true },
    });
    setTimeout(() => {
      if (r) {
        props.shakeLamp();
        setLetterDict({
          ...letterDict,
          [props.letter]: { active: true, show: false },
          [selectedCard]: { active: true, show: false },
        });
        let newActivePairs = activePairs.filter(
          (item) => item !== props.letter && item !== selectedCard
        );
        if (newActivePairs.length === 0) {
          props.genieAppear();
        }
        setActivePairs(newActivePairs);
      } else {
        setLetterDict({
          ...letterDict,
          [props.letter]: { active: false, show: true },
          [selectedCard]: { active: false, show: true },
        });
      }
    }, 200);
  };

  return (
    <Fade in={letterDict[props.letter].show} timeout={500}>
      <Card
        className={`card-dimensions ${
          letterDict[props.letter]["active"] ? "raised" : "flat"
        } light-card-letter`}
        sx={{ height: "100" }}
        elevation={letterDict[props.letter]["active"] ? 24 : 1}
        onClick={
          letterDict[props.letter].show ? (e) => selectCard(props.letter) : null
        }
      >
        <CardActionArea style={{ height: "100" }}>
          {/* <img
            src="/assets/images/card-front.png"
            className="card-dimensions front-image easy-image"
          /> */}
          {props.letter.length === 1 ? (
            <CardMedia component="img" image={imageURL} alt="a" />
          ) : (
            <CardContent>
              <Typography variant="h3" component="div" align="center">
                {props.letter.slice(0, 1)}
              </Typography>
            </CardContent>
          )}
        </CardActionArea>
      </Card>
    </Fade>
  );
};

export default CardElement;
