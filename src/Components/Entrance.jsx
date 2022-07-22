import { useContext, useRef, forwardRef } from "react";
import { CardGameContext } from "../App";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import BasicButton from "./BasicButton";
import { Link } from "react-router-dom";
import exampleVideo1 from "/assets/videos/game-example.gif";
import exampleVideo2 from "/assets/videos/genie-grow-cropped.gif";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import CardElementFlip from "./CardElementFlip";
import Stack from "@mui/material/Stack";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { alertClasses } from "@mui/material";
import { gsap } from "gsap";

export default function Entrance() {
  const { setLetterDict, setImageURLPrefix } = useContext(CardGameContext);

  const navigate = useNavigate();
  // const params = useParams();
  const goToDashboard = () => {
    navigate(`/dashboard`);
  };
  const goToIntro1 = () => {
    navigate(`/intro1`);
  };
  let genieImageURL = "/assets/images/genie-centered.png";
  const genieRef = useRef();

  // useEffect(() => {
  //   setImageURLPrefix("/assets/images/drawn-alphabet-images/isl-drawn-");
  //   let genieAppearTween = gsap.timeline();
  //   genieRef.current.style.scale = 0.2;
  //   genieRef.current.style.bottom = "-20%";
  //   setTimeout(() => {
  //     genieAppearTween.fromTo(
  //       genieRef.current,
  //       { scale: 1, y: "0%", x: "0" },
  //       { scale: 3, y: "-100%", x: "0", duration: 2 }
  //     );
  //   }, 3500);
  // }, []);

  const runCardFlipAnimation = () => {};

  return (
    <Container align="center" maxWidth="xs" sx={{ padding: "0" }}>
      <Box mt={2}>
        <Typography variant="h6">Irish Sign Languge (ISL)</Typography>
        <Typography variant="body1">- welcome -</Typography>
      </Box>
      <Box mt={1}>
        <Typography variant="body1">
          On this site, you can discover the world of ISL, and play a
          fingerspelling memory game!
        </Typography>
      </Box>
      <Box mt={1}>
        <img width="67%" src={exampleVideo1} />
      </Box>
      <Box mt={1}>
        <Typography variant="body1">
          In the game, you will match ISL hand signs and letters to free a
          genie.
        </Typography>
      </Box>
      <Box mt={1}>
        <img src={exampleVideo2} ref={genieRef} width="50%" />
      </Box>
      <Box mt={1}>
        <Typography variant="body1">
          The faster you are, the stronger the genie becomes!
        </Typography>
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          marginBottom: "10px",
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 2002,
        }}
      >
        <Stack spacing={2} direction="row">
          <Button variant="outlined" size="medium" onClick={goToIntro1}>
            discover isl
          </Button>
          <Button variant="contained" size="medium" onClick={goToDashboard}>
            select game
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}
