import { useContext, useRef, forwardRef } from "react";
import { CardGameContext } from "../App";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BasicButton from "./BasicButton";

import exampleVideo1 from "/assets/videos/game-example.gif";
import exampleVideo2 from "/assets/videos/genie-grow-cropped.gif";
import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";

export default function Intro1() {
  const { setLetterDict, setImageURLPrefix } = useContext(CardGameContext);

  const navigate = useNavigate();
  const goToIntro2 = () => {
    navigate(`/intro2`);
  };

  return (
    <Container align="center" maxWidth="xs" sx={{ padding: "0" }}>
      <Box mt={2}>
        <Typography variant="h6">Irish Sign Languge (ISL)</Typography>
        <Typography variant="body1">- an introduction -</Typography>
      </Box>
      <Box mt={4}>
        <Typography variant="body1" align="left">
          ISL is the first and/or preferred language of 5000 Deaf people in
          Ireland. Including family, friends, and co-workers, over 40,000 people
          use ISL to communicate on a regular basis.
        </Typography>
      </Box>
      <Box mt={4}>
        <Typography variant="body1" align="left">
          Irish Sign Language is different from all other sign languages such as
          British Sign Language, American Sign Language etc.
        </Typography>
      </Box>
      <Box mt={4}>
        <Typography variant="body1" align="left">
          It is a visual and spatial language with its own distinct grammar. Not
          only is it a language of the hands, but also of the face and body
        </Typography>
      </Box>
      <BasicButton onClick={goToIntro2} text="Next" />
    </Container>
  );
}
