import { Box, Typography } from "@mui/material";
import "./App.css";
import Newr from "./newr";
import Switch from "@mui/material/Switch";
import { useState } from "react";

const label = { inputProps: { "aria-label": "Switch demo" } };

function App() {
  console.log("----render app");
  const [s, toggle] = useState(true);
  return (
    <>
      <Box ml={10} border={1} borderColor={"red"}>
        <Switch
          {...label}
          checked={s}
          onChange={(e) => toggle(e.target.checked)}
          inputProps={{ "aria-label": "controlled" }}
        />
      </Box>
      {s ? <Newr></Newr> : <Typography>-----Blank----</Typography>}
    </>
  );
}

export default App;
