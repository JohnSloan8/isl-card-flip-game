import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";

export default function MainTitle() {
  const navigate = useNavigate();
  const redirectHome = () => {
    navigate("/dashboard");
  };
  const redirectInfo = () => {
    navigate("/");
  };
  const redirectMainSite = () => {
    window.location.href = "https://clcs-main-website.netlify.app/";
  };

  return (
    <Box className="main-title" sx={{ cursor: "pointer" }}>
      <Grid container spacing={{ xs: 2 }}>
        <Grid
          item
          xs={2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <a
            href="https://www.irishdeafsociety.ie/wp-content/uploads/2014/07/irish-sign-language-letters.pdf"
            target="_blank"
          >
            <ArticleIcon
              fontSize="medium"
              sx={{
                color: "primary.main",
                cursor: "pointer",
              }}
            />
          </a>
        </Grid>
        <Grid item xs={8}>
          <Typography
            variant="h4"
            component="div"
            align="center"
            color="primary.main"
            fontFamily="Aladin"
            mt={1}
            onClick={redirectHome} // avoid Aladdin
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
            sx={{ cursor: "pointer", padding: 0 }}
          >
            ISL Alphabet Game
          </Typography>
        </Grid>
        <Grid
          item
          xs={2}
          sx={{
            display: "flex",
            fontSize: "medium",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <HomeIcon
            sx={{
              color: "primary.main",
            }}
            onClick={redirectInfo}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
