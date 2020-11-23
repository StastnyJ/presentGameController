import { Button } from "@material-ui/core";
import React from "react";

interface IProps {
  sendMessage: (chenel: string, message: string) => void;
}

export default function HanoiTowersController({ sendMessage }: IProps) {
  return (
    <>
      <Button onClick={(e) => sendMessage("presentGame", "click:0")} color="primary" variant="contained" fullWidth>
        A
      </Button>
      <br />
      <br />

      <Button onClick={(e) => sendMessage("presentGame", "click:1")} color="primary" variant="contained" fullWidth>
        B
      </Button>
      <br />
      <br />

      <Button onClick={(e) => sendMessage("presentGame", "click:2")} color="primary" variant="contained" fullWidth>
        C
      </Button>
    </>
  );
}
