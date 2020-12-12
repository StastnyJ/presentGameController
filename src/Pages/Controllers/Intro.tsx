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
          <Typography variant="h6">Šťastný Vratislav</Typography>
          <Typography variant="h5">Věk: ten nejlepší</Typography>
          <Typography variant="h5">Výška: ohromná</Typography>
          <Typography variant="h5">Váha: pořádná</Typography>
          <br />
          <Typography variant="h5">Speciální dovednosti:</Typography>
          <Typography variant="body1">
            <ul style={{ listStyle: "none" }}>
              <li>Dokáže nechat zmizet celou tabulku čokolády</li>
              <li>Záchod ucpe ve dvou vlnách</li>
              <li>Ujde desítky kilometrů aniž by opustil dům</li>
            </ul>
          </Typography>
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
