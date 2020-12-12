import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    btn: {
      height: "min(20vh, 20vw)",
      width: "min(20vh, 20vw)",
      backgroundColor: "red",
      display: "flex",
      alignContent: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "50%",
      color: "white",
      fontFamily: "Roboto",
    },
  })
);

interface IProps {
  sendMessage: (chenel: string, message: string) => void;
}

export default function HanoiTowersController({ sendMessage }: IProps) {
  const classes = useStyles();
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <div style={{ display: "flex", flexDirection: "row", width: "100vw", justifyContent: "space-around" }}>
          <div onClick={(e) => sendMessage("presentGame", "click:0")} className={classes.btn}>
            A
          </div>
          <div onClick={(e) => sendMessage("presentGame", "click:1")} className={classes.btn}>
            B
          </div>
          <div onClick={(e) => sendMessage("presentGame", "click:2")} className={classes.btn}>
            C
          </div>
        </div>
      </div>

      {/* <Button onClick={(e) => sendMessage("presentGame", "click:0")} color="primary" variant="contained" fullWidth>
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
      </Button> */}
    </>
  );
}
