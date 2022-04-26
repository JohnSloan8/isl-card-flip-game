import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import NativeSelect from '@mui/material/NativeSelect';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";

export default function Dashboard() {

  const [age, setAge] = useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const gameTypes = ["vowels", "static consonants", "moving consonants", "all"];

  return (
    <Container align="center">
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="text"
      >
        {gameTypes.map((game) =>
          <Link
              style={{ display: "block", margin: "1rem 0" }}
              to={`/cardgames/${game.replace(/\s/g, '_')}`}
              key={game}
            >
            <Button>{game}</Button>
          </Link>)}
      </ButtonGroup>
    </Container>
  );
}
