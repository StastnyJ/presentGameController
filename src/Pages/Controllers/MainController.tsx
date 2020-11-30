import { createStyles, makeStyles, Theme } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    arrowLeft: {
      position: "absolute",
      width: 0,
      height: 0,
      left: "calc(50vw - min(35vh, 35vw))",
      top: "calc(50vh - min(10vh, 10vw))",
      borderTop: "min(10vh, 10vw) solid transparent",
      borderBottom: "min(10vh, 10vw) solid transparent",
      borderRight: "min(20vh, 20vw) solid red",
    },
    arrowRight: {
      position: "absolute",
      width: 0,
      height: 0,
      right: "calc(50vw - min(35vh, 35vw))",
      top: "calc(50vh - min(10vh, 10vw))",
      borderTop: "min(10vh, 10vw) solid transparent",
      borderBottom: "min(10vh, 10vw) solid transparent",
      borderLeft: "min(20vh, 20vw) solid red",
    },
  })
);

interface IProps {
  sendMessage: (chenel: string, message: string) => void;
}

export default function HanoiTowersControll({ sendMessage }: IProps) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.arrowLeft} onClick={(e) => sendMessage("presentGameLayout", "PrevScene")}></div>
      <div className={classes.arrowRight} onClick={(e) => sendMessage("presentGameLayout", "NextScene")}></div>
    </>
  );
}
