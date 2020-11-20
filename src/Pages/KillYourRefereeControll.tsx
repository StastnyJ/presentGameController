import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    arrowUp: {
      position: "absolute",
      width: 0,
      height: 0,
      left: "calc(50vw - min(10vh, 10vw))",
      top: "calc(50vh - min(40vh, 40vw))",
      borderLeft: "min(10vh, 10vw) solid transparent",
      borderRight: "min(10vh, 10vw) solid transparent",
      borderBottom: "min(20vh, 20vw) solid red",
    },
    arrowDown: {
      position: "absolute",
      width: 0,
      height: 0,
      left: "calc(50vw - min(10vh, 10vw))",
      top: "calc(50vh + min(20vh, 20vw))",
      borderLeft: "min(10vh, 10vw) solid transparent",
      borderRight: "min(10vh, 10vw) solid transparent",
      borderTop: "min(20vh, 20vw) solid red",
    },
    arrowLeft: {
      position: "absolute",
      width: 0,
      height: 0,
      left: "calc(50vw - min(40vh, 40vw))",
      top: "calc(50vh - min(10vh, 10vw))",
      borderTop: "min(10vh, 10vw) solid transparent",
      borderBottom: "min(10vh, 10vw) solid transparent",
      borderRight: "min(20vh, 20vw) solid red",
    },
    arrowRight: {
      position: "absolute",
      width: 0,
      height: 0,
      right: "calc(50vw - min(40vh, 40vw))",
      top: "calc(50vh - min(10vh, 10vw))",
      borderTop: "min(10vh, 10vw) solid transparent",
      borderBottom: "min(10vh, 10vw) solid transparent",
      borderLeft: "min(20vh, 20vw) solid red",
    },
    fireButton: {
      position: "absolute",
      width: "min(20vh, 20vw)",
      height: "min(20vh, 20vw)",
      left: "calc(50vw - min(10vh, 10vw))",
      top: "calc(50vh - min(10vh, 10vw))",
      borderRadius: "50%",
      backgroundColor: "red",
    },
  })
);
interface IProps {
  sendMessage: (chenel: string, message: string) => void;
}

export default function KillYourRefereeControll({ sendMessage }: IProps) {
  const classes = useStyles();
  return (
    <>
      <div
        className={classes.arrowUp}
        onTouchEnd={() => sendMessage("presentGame", "moveEnd")}
        onTouchStart={() => sendMessage("presentGame", "moveStart:UP")}
      ></div>
      <div
        className={classes.arrowLeft}
        onTouchEnd={() => sendMessage("presentGame", "moveEnd")}
        onTouchStart={() => sendMessage("presentGame", "moveStart:LEFT")}
      ></div>
      <div
        className={classes.arrowDown}
        onTouchEnd={() => sendMessage("presentGame", "moveEnd")}
        onTouchStart={() => sendMessage("presentGame", "moveStart:DOWN")}
      ></div>
      <div
        className={classes.arrowRight}
        onTouchEnd={() => sendMessage("presentGame", "moveEnd")}
        onTouchStart={() => sendMessage("presentGame", "moveStart:RIGHT")}
      ></div>
      <div className={classes.fireButton} onClick={() => sendMessage("presentGame", "FIRE")}></div>
    </>
  );
}
