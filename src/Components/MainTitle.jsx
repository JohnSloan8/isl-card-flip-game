import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from "react-router-dom";

export default function MainTitle() {

  const navigate = useNavigate();
  const redirectHome = () => {
    navigate('/')
  }

  const hoverTitle = () => {
    navigate('/')
  }

  return (
      <Box 
        onClick={redirectHome}
        className="main-title"
      >
        <Typography 
          variant="h3" 
          component="div" 
          align="center" 
          color="primary.main"
          fontFamily="Aladin"
        >
          Aladdin
        </Typography>
        <Typography 
          variant="h6" 
          component="div" 
          align="center" 
          color="primary.main"
          fontFamily="Aladin"
        >
          ISL Alphabet Game
        </Typography>
      </Box>
  );
}
