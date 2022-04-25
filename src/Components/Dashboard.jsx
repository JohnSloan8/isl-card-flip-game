import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

export default function Dashboard() {

  const buttons = [
    <Button key="one">Vowels</Button>,
    <Button key="two">Static Consonants</Button>,
    <Button key="three">Moving Consonants</Button>,
    <Button key="four">All</Button>,
  ];

  return (
    <Container align="center">
      <h2>Choose Your Game</h2>
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="text"
      >
        {buttons}
      </ButtonGroup>
    </Container>
  );
}
