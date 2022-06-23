import { useContext, useRef, forwardRef } from "react";
import { CardGameContext } from "../App";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import exampleVideo1 from "/assets/videos/game-example.gif";
import exampleVideo2 from "/assets/videos/genie-appear.gif";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import CardElementFlip from "./CardElementFlip";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { alertClasses } from "@mui/material";
import { gsap } from "gsap";

export default function Entrance() {
  const { setLetterDict, setImageURLPrefix } = useContext(CardGameContext);

  const navigate = useNavigate();
  const params = useParams();
  const goToDashboard = () => {
    navigate(`/dashboard`);
  };
  let genieImageURL = "/assets/images/genie-centered.png";
  const genieRef = useRef();

  useEffect(() => {
    setImageURLPrefix("/assets/images/drawn-alphabet-images/isl-drawn-");
    let genieAppearTween = gsap.timeline();
    genieRef.current.style.scale = 0.2;
    genieRef.current.style.bottom = "-20%";
    setTimeout(() => {
      genieAppearTween.fromTo(
        genieRef.current,
        { scale: 1, y: "0%", x: "0" },
        { scale: 3, y: "-100%", x: "0", duration: 2 }
      );
    }, 3500);
  }, []);

  const runCardFlipAnimation = () => {};

  return (
    <Container align="center" maxWidth="xs" sx={{ padding: "2vh" }}>
      <Box mt={2}>
        <Typography variant="p">
          Match ISL hand signs and letters to free the genie
        </Typography>
      </Box>
      <Box mt={2}>
        <img width="67%" src={exampleVideo1} />
      </Box>
      <Box mt={4}>
        <Typography variant="p">
          The faster you are, the stronger the genie becomes!
        </Typography>
      </Box>

      <Box mt={1} height={200}>
        <img src={genieImageURL} ref={genieRef} width="100%" />
        {/* <img width="50%%" src={exampleVideo2} /> */}
      </Box>
      <Box mt={8}>
        <Typography variant="p">
          Can you help the genie reach maximum strength?
        </Typography>
      </Box>
      <Box mt={2}>
        <Typography variant="p" sx={{ fontColor: "grey", fontSize: "12px" }}>
          (for an ISL help sheet, tap the top left icon)
        </Typography>
      </Box>
      <Button
        className="main-form"
        variant="contained"
        size="large"
        onClick={goToDashboard}
      >
        Next
      </Button>
    </Container>
  );
}
