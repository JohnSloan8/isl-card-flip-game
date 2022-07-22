import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const BasicButton = (props) => {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 0,
        left: 0,
        marginBottom: "10px",
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 2002,
      }}
    >
      <Button variant="contained" size="medium" onClick={props.onClick}>
        {props.text}
      </Button>
    </Box>
  );
};

export default BasicButton;
