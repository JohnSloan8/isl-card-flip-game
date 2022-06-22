import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import ArticleIcon from "@mui/icons-material/Article";
import { useNavigate } from "react-router-dom";
import { NestCamWiredStandTwoTone } from "@mui/icons-material";

export default function MainTitle() {
  const navigate = useNavigate();
  const redirectHome = () => {
    navigate("/dashboard");
  };
  const redirectInfo = () => {
    navigate("/");
  };

  return (
    <Box className="main-title" sx={{ cursor: "pointer" }}>
      <a
        href="https://www.irishdeafsociety.ie/wp-content/uploads/2014/07/irish-sign-language-letters.pdf"
        target="_blank"
      >
        <ArticleIcon
          fontSize="large"
          sx={{
            position: "absolute",
            left: "20px",
            top: "28px",
            color: "primary.main",
            cursor: "pointer",
          }}
        />
      </a>
      <Typography
        variant="h3"
        component="div"
        align="center"
        color="primary.main"
        fontFamily="Aladin"
        mt={1}
        onClick={redirectHome}
      >
        Aladdin
      </Typography>
      <Typography
        variant="h6"
        component="div"
        align="center"
        color="primary.main"
        fontFamily="Aladin"
        onClick={redirectHome}
        sx={{ cursor: "pointer" }}
      >
        ISL Alphabet Game
      </Typography>
      <QuestionMarkIcon
        fontSize="large"
        sx={{
          position: "absolute",
          right: "20px",
          top: "28px",
          color: "primary.main",
        }}
        onClick={redirectInfo}
      />
    </Box>
  );
}
