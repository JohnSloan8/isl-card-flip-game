import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";

export default function Dashboard() {

  const [imageType, setImageType] = useState('drawing');
  const handleChange = (event) => {
    setImageType(event.target.value);
    if (event.target.value === "photo") {
      document.getElementById('moving consonants').style.visibility = "hidden"
    } else {
      document.getElementById('moving consonants').style.visibility = "visible"
    }
  };

  const gameTypes = ["vowels", "static consonants", "moving consonants", "all"];

  return (
    <Container align="center">
      <FormControl fullWidth sx={{marginTop: "20px"}}>
        <Select
          defaultValue='drawing'
          onChange={handleChange}
        >
          <MenuItem value='drawing'>Drawing</MenuItem>
          <MenuItem value='photo'>Photo</MenuItem>
        </Select>
      </FormControl>
      <ButtonGroup
        sx={{marginTop: "20px"}}
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="text"
      >
        {gameTypes.map((game) =>
          <div key={game} id={game}>
            <Link
                style={{ display: "block", margin: "1rem 0" }}
                to={`/cardgames/${imageType}/${game.replace(/\s/g, '_')}`}
            >
              <Button>{game}</Button>
            </Link>
          </div>)}
      </ButtonGroup>
    </Container>
  );
}
