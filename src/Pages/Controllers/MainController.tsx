import { Button } from "@material-ui/core";
import React from "react";

interface IProps {
  sendMessage: (chenel: string, message: string) => void;
}

export default function HanoiTowersControll({ sendMessage }: IProps) {
  return (
    <>
      <Button onClick={(e) => sendMessage("presentGameLayout", "NextScene")} color="primary" variant="contained" fullWidth>
        Next
      </Button>
    </>
  );
}
