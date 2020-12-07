import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fireButton: {
      position: "absolute",
      width: "min(40vh, 40vw)",
      height: "min(40vh, 40vw)",
      left: "calc(50vw - min(20vh, 20vw))",
      top: "calc(50vh - min(20vh, 20vw))",
      borderRadius: "50%",
      backgroundColor: "red",
    },
  })
);
interface IProps {
  sendMessage: (chenel: string, message: string) => void;
}

export default function SwappingController({ sendMessage }: IProps) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.fireButton} onClick={() => sendMessage("presentGame", "SWAP")}></div>
    </>
  );
}
