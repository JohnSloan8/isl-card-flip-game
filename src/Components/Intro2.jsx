import { useContext, useRef, forwardRef } from "react";
import { CardGameContext } from "../App";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import BasicButton from "./BasicButton";

import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";

export default function Intro3() {
  const { setLetterDict, setImageURLPrefix } = useContext(CardGameContext);

  const navigate = useNavigate();
  const params = useParams();
  const goToIntro3 = () => {
    navigate(`/intro3`);
  };

  return (
    <Container align="center" maxWidth="xs" sx={{ padding: "0" }}>
      <Box mt={2}>
        <Typography variant="h6">Irish Sign Languge (ISL)</Typography>
        <Typography variant="body1">- the signs -</Typography>
      </Box>
      <Box mt={2}>
        <Typography variant="body2" align="left">
          There are various methods of communication in ISL. Body language,
          mouthing and expressions are combined with hand signs to create a rich
          and expressive vocabulary.
        </Typography>
      </Box>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={4}>
          <img
            width="100%"
            src="/assets/images/photo-alphabet-images/isl-photo-i.png"
          />
          <Typography variant="h5">I</Typography>
        </Grid>
        <Grid item xs={4}>
          <img
            width="100%"
            src="/assets/images/photo-alphabet-images/isl-photo-s.png"
          />
          <Typography variant="h5">S</Typography>
        </Grid>
        <Grid item xs={4}>
          <img
            width="100%"
            src="/assets/images/photo-alphabet-images/isl-photo-l.png"
          />
          <Typography variant="h5">L</Typography>
        </Grid>
      </Grid>
      <Box mt={2}>
        <Typography variant="body2" align="left">
          Lexicalised fingerspelling is one form of signing which is used to
          signify letters of the English alphabet.
        </Typography>
      </Box>
      <Box mt={2}>
        <Typography variant="body2" align="left">
          Let's see the whole alphabet.
        </Typography>
      </Box>
      <BasicButton onClick={goToIntro3} text="Next" />
    </Container>
  );
}
