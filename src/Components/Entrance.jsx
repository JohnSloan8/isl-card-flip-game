import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import exampleVideo1 from "/assets/videos/game-example.gif";
import exampleVideo2 from "/assets/videos/genie-appear.gif";

import { useNavigate } from "react-router-dom";

export default function Entrance() {
  const navigate = useNavigate();
  const goToDashboard = () => {
    navigate(`/dashboard`);
  };

  return (
    <Container align="center" maxWidth="xs" sx={{ padding: "2vh" }}>
      <Box mt={2}>
        <Typography variant="p">
          Match ISL hand signs and letters to free the genie
        </Typography>
      </Box>
      <Box mt={2} p={4}>
        <img width="100%" src={exampleVideo1} />
      </Box>
      <Box mt={2}>
        <Typography variant="p">
          The faster you are, the stronger the genie becomes!
        </Typography>
      </Box>
      <Box mt={2} p={4}>
        <img width="100%" src={exampleVideo2} />
      </Box>
      <Box mt={2}>
        <Typography variant="p">
          Can you help the genie reach maximum strength?
        </Typography>
      </Box>
      <Box mt={2}>
        <Typography variant="p">
          To help, here is a{" "}
          <a
            href="https://www.irishdeafsociety.ie/wp-content/uploads/2014/07/irish-sign-language-letters.pdf"
            target="_blank"
          >
            document
          </a>{" "}
          with all the signs
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
