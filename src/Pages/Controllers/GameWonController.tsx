import { Button, Typography } from "@material-ui/core";
import React from "react";

interface IProps {
  sendMessage: (chenel: string, message: string) => void;
}

export default function GameWonController({ sendMessage }: IProps) {
  return (
    <>
      <Typography>Vyhrál jsi</Typography>
      <br />
      <Button
        onClick={(e) => {
          sendMessage("presentGameLayout", "NextScene");
          sendMessage("presentGameController", "requestController:Main");
        }}
        color="primary"
        variant="contained"
        fullWidth
      >
        Ukončit hru
      </Button>
    </>
  );
}
