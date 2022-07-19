import { useEffect, useRef, useState } from "react";
import CardElement from "./CardElement";
import CardElementFlip from "./CardElementFlip";
import { CardGameContext } from "../App";
import { useContext } from "react";
import Container from "@mui/material/Container";
import { gsap } from "gsap";
import timings from "../data/timings";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import BasicButton from "./BasicButton";

const GameGrid = () => {
  const { difficulty, gameType, cardOrder, startTime } =
    useContext(CardGameContext);

  const navigate = useNavigate();
  let genieImageURL = "/assets/images/genie-cropped.png";
  let lampImageURL = "/assets/images/lamp-cropped-small.png";

  const lampRef = useRef();
  const genieRef = useRef();

  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    navigate("/dashboard");
  };
  const [levels, setLevels] = useState([
    "apprentice",
    "strong",
    "all powerful",
    "genius",
  ]);
  const [times, setTimes] = useState([1, 2, 3, 4]);
  const [yourTime, setYourTime] = useState(999);
  const [yourLevel, setYourLevel] = useState("apprentice");

  useEffect(() => {
    if (cardOrder.length === 0) {
      navigate("/dashboard");
    }
  }, []);

  const chooseGame = () => {
    navigate("/dashboard");
  };

  const shakeLamp = () => {
    let randomXShake = 1 + Math.random() * 2;
    let randomYShake = 1 + Math.random() * 2;
    let shakeTween = gsap.timeline({ repeat: 5, repeatDelay: 0 });
    shakeTween.to(lampRef.current, {
      x: randomXShake,
      y: randomYShake,
      duration: 0.025,
    });
    shakeTween.to(lampRef.current, {
      x: -randomXShake,
      y: -randomYShake,
      duration: 0.05,
    });
    shakeTween.to(lampRef.current, { x: 0, y: 0, duration: 0.025 });
  };

  const genieAppear = () => {
    console.log("genieAppear");
    let timeTakenFloat = (performance.now() - startTime) / 1000;
    let timeTaken = Math.round(timeTakenFloat * 10) / 10;
    let genieScale = getGenieScale(timeTaken);
    setYourTime(timeTaken);
    setYourLevel(genieScale[0]);
    setTimes(genieScale[1]);
    // let levelText = `
    //    all powerful: ${genieScale[1][0]}s
    //    strong: ${genieScale[1][1]}s
    //    normal: ${genieScale[1][2]}s
    //    weak: ${genieScale[1][2]}+s
    // `;
    genieRef.current.hidden = false;
    let genieAppearTween = gsap.timeline();
    let scaleMult = 0.2 * levels.indexOf(genieScale[0]) + 0.5;
    genieAppearTween.fromTo(
      genieRef.current,
      { scale: 0, y: "25%", x: "5%" },
      { scale: scaleMult, y: "-50%", x: `${-2 * scaleMult}`, duration: 2 }
    );
    setTimeout(() => {
      handleOpen();
      // alert(
      //   "Your time: " +
      //     (Math.round(timeTaken * 10) / 10).toString() +
      //     " seconds" +
      //     "\n\n" +
      //     "Genie strength: " +
      //     genieScale[0] +
      //     "\n\n" +
      //     "Levels:" +
      //     "\n" +
      //     levelText
      // );
      // navigate("/dashboard");
    }, 2500);
  };

  const getGenieScale = (timeTaken) => {
    // console.log("timeTaken:", timeTaken);
    // console.log("difficulty:", difficulty);
    // console.log("gameType:", gameType);
    // console.log("timings:", timings);
    // console.log("timings[difficulty]:", timings[difficulty]);
    let timeLevels = timings[difficulty][gameType];
    // console.log("timeLevels:", timeLevels);
    let level = "apprentice";
    if (timeTaken < timeLevels[0]) {
      level = "genius";
    } else if (timeTaken < timeLevels[1]) {
      level = "all powerful";
    } else if (timeTaken < timeLevels[2]) {
      level = "strong";
    }
    return [level, timeLevels];
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    maxWidth: "400px",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Container align="center" maxWidth="md" sx={{ paddingTop: 1 }}>
        <Grid container spacing={{ xs: 1 }}>
          {cardOrder.map((letter, index) => (
            <Grid item xs={4} sm={3} md={2} key={index}>
              {difficulty === "easy" ? (
                <CardElement
                  letter={letter}
                  shakeLamp={shakeLamp}
                  genieAppear={genieAppear}
                />
              ) : (
                <CardElementFlip
                  letter={letter}
                  shakeLamp={shakeLamp}
                  genieAppear={genieAppear}
                />
              )}
            </Grid>
          ))}
        </Grid>
      </Container>
      <div className="lamp-container" onClick={shakeLamp}>
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            align="center"
          >
            You did it in {yourTime}s!
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            align="center"
          >
            Your level is <strong>{yourLevel}</strong>
          </Typography>
          <List dense={true}>
            {["genius", "all powerful", "strong"].map((l, i) => (
              <ListItem key={l}>
                {times[i] + "s"}: {l}
              </ListItem>
            ))}
            <ListItem key="apprentice">{times[2] + "s+"}: apprentice</ListItem>
          </List>
          <Box mt={4}>
            <BasicButton onClick={chooseGame} text="home" />
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default GameGrid;
