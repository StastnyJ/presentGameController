import React from "react";
import BasketballController from "./BasketballController";
import HanoiTowersController from "./HanoiTowersController";
import KillYourRefereeController from "./KillYourRefereeController";
import TetrisController from "./TetrisController";
import MainController from "./MainController";
import GameWonController from "./GameWonController";
import KubaController from "./KubaController";

export const getConrollers = (sendMessage: (chenel: string, message: string) => void) => {
  return {
    Main: <MainController sendMessage={sendMessage} />,
    Basketball: <BasketballController sendMessage={sendMessage} />,
    Hanoi: <HanoiTowersController sendMessage={sendMessage} />,
    KillYourReferee: <KillYourRefereeController sendMessage={sendMessage} />,
    Tetris: <TetrisController sendMessage={sendMessage} />,
    GameWon: <GameWonController sendMessage={sendMessage} />,
    Kuba: <KubaController sendMessage={sendMessage} />,
  } as { [index: string]: JSX.Element };
};