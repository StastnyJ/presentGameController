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
  })
);
interface IProps {
  sendMessage: (chenel: string, message: string) => void;
}

export default function KubaController({ sendMessage }: IProps) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.arrowUp} onClick={() => sendMessage("presentGame", "move:ROTATE")}></div>
      <div className={classes.arrowLeft} onClick={() => sendMessage("presentGame", "move:LEFT")}></div>
      <div className={classes.arrowDown} onClick={() => sendMessage("presentGame", "move:DOWN")}></div>
      <div className={classes.arrowRight} onClick={() => sendMessage("presentGame", "move:RIGHT")}></div>
    </>
  );
}
