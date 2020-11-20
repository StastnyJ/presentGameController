import React, { useState } from "react";
import { Button, createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainCircle: {
      position: "absolute",
      backgroundColor: "#a1efff",
      width: `min(80vh, 80vw)`,
      height: `min(80vh, 80vw)`,
      borderRadius: "50%",
      left: `calc(50vw - min(40vh, 40vw))`,
      top: `calc(50vh - min(40vh, 40vw))`,
    },
    subcircle: {
      position: "absolute",
      backgroundColor: "#0046bf",
      width: `min(8vh, 8vw)`,
      height: `min(8vh, 8vw)`,
      borderRadius: "50%",
    },
    colFlex: {
      display: "flex",
      flexDirection: "column",
      height: "100vh",
    },
    flexGrow: {
      flexGrow: 1,
    },
  })
);

interface IProps {
  sendMessage: (chenel: string, message: string) => void;
}

interface Point2D {
  x: number;
  y: number;
}

function vwTOpx(value: number) {
  var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName("body")[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth;

  var result = (x * value) / 100;
  return result;
}

function vhTOpx(value: number) {
  var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName("body")[0],
    y = w.innerHeight || e.clientHeight || g.clientHeight;

  var result = (y * value) / 100;
  return result;
}

export default function BasketballControll({ sendMessage }: IProps) {
  const classes = useStyles();
  const [coords, setCoords] = useState({ x: -1, y: -1 });

  const getCenter = () => {
    return { x: vwTOpx(50), y: vhTOpx(50) };
  };

  const getMainRadius = () => {
    return Math.min(vhTOpx(40), vwTOpx(40));
  };

  const getSubRadius = () => {
    return Math.min(vhTOpx(4), vwTOpx(4));
  };

  const getDistance = (a: Point2D, b: Point2D) => {
    return Math.sqrt((a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y));
  };

  return (
    <>
      <div
        className={classes.mainCircle}
        onTouchMove={(e) => {
          const x = e.touches[0].clientX - getSubRadius();
          const y = e.touches[0].clientY - getSubRadius();
          if (getDistance(getCenter(), { x: x + getSubRadius(), y: y - getSubRadius() }) <= getMainRadius())
            setCoords({ x: x, y: y });
        }}
      ></div>
      <div
        className={classes.subcircle}
        style={{
          left: coords.x < 0 ? "calc(50vw - min(4vh, 4vw))" : coords.x,
          top: coords.y < 0 ? "calc(50vh - min(4vh, 4vw))" : coords.y,
        }}
      ></div>
      <div className={classes.colFlex}>
        <div className={classes.flexGrow}>&nbsp;</div>
        <Button
          fullWidth
          color="primary"
          variant="contained"
          onClick={() => {
            const x = coords.x + getSubRadius();
            const y = coords.y + getSubRadius();
            const center = getCenter();
            const r = getMainRadius();

            sendMessage("presentGame", `FIRE:${(x - center.x) / r};${-(y - center.y) / r}`);
          }}
        >
          FIRE
        </Button>
      </div>
    </>
  );
}
