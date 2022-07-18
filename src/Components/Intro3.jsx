import { useContext, useRef, forwardRef } from "react";
import { CardGameContext } from "../App";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BasicButton from "./BasicButton";
import { useNavigate } from "react-router-dom";

export default function Intro3() {
  const { setLetterDict, setImageURLPrefix } = useContext(CardGameContext);

  const navigate = useNavigate();
  const goToDashboard = () => {
    navigate(`/dashboard`);
  };
  let genieImageURL = "/assets/images/genie-centered.png";

  return (
    <Container align="center" maxWidth="xs" sx={{ padding: "0" }}>
      <Box mt={2}>
        <Typography variant="h6">Irish Sign Languge (ISL)</Typography>
        <Typography variant="body1">- lexicalised fingerspelling -</Typography>
      </Box>
      <Box mt={2}>
        <img
          width="100%"
          src="/assets/images/drawn-alphabet-images/all-signs.png"
          alt="fingerspelling alphabet image"
        />
      </Box>
      <Box mt={2}>
        <Typography variant="body2" align="left">
          Take a look at the fingerspelling chart above. You might notice a
          resemblance between the signs and the written letters.
        </Typography>
      </Box>
      <Box mt={2}>
        <Typography variant="body2" align="left">
          Do you think you can remember some of the signs in a memory game? (You
          can download this chart at any time by tapping the icon on the top
          left)
        </Typography>
      </Box>
      <Box mt={2}>
        <Typography variant="body2" align="left">
          Let's start with the vowels. Look at A, E, I, O, and U. When you are
          ready, tap NEXT and then start the game. Good luck!
        </Typography>
      </Box>
      <BasicButton onClick={goToDashboard} text="next" />
    </Container>
  );
}
