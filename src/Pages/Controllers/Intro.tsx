import React, { useState } from "react";
import { Button, createStyles, makeStyles, Theme, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100vh",
      width: "calc(100vw - 10vw)",
      paddingLeft: "5vw",
      paddingRight: "5vw",
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    avatar: {
      borderRadius: "50%",
      width: "min(50vw, 50vh)",
    },
  })
);

interface IProps {
  sendMessage: (chenel: string, message: string) => void;
}

export default function Intro({ sendMessage }: IProps) {
  const classes = useStyles();
  const [step, setStep] = useState(0);

  return (
    <div className={classes.root}>
      {(step === 0 && (
        <>
          <Typography variant="h3">GAME TITLE</Typography>
          <br />
          <Button fullWidth variant="contained" color="primary" onClick={() => setStep(1)}>
            Spustit hru
          </Button>
        </>
      )) || (
        <>
          <br />
          <br />
          <Typography variant="h4">Výběr postav</Typography>
          <span style={{ flexGrow: 1 }}></span>
          <img alt="avatar" className={classes.avatar} src="/img/character.jpg" />
          <Typography variant="h6">Šťastný vratislav</Typography>
          <Typography variant="h5">Věk: 50 let</Typography>
          <Typography variant="h5">Výška: xxx cm</Typography>
          <Typography variant="h5">Váha: xxx kg</Typography>
          <Typography variant="h5">Speciální dovednosti: </Typography>
          <br />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => sendMessage("presentGameController", "requestController:Main")}
          >
            Zvolit postavu
          </Button>
          <br />
          <br />
          <br />
        </>
      )}
    </div>
  );
}
