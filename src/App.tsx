import React, { useEffect, useState } from "react";
import LoadingPage from "./Pages/Loading";
// import HanoiTowersControll from "./Pages/HanoiTowersControll";
// import BasketballControll from "./Pages/BasketballController";
// import KillYourRefereeControll from "./Pages/KillYourRefereeControll";
import TetrsControll from "./Pages/TetrisController";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import mqtt from "mqtt";
import ErrorPage from "./Pages/ErrorPage";

type appState = "connected" | "connecting" | "connectionLost" | "failed";

function App() {
  const [mqttClient, setMqttClient] = useState<mqtt.MqttClient | undefined>(undefined);
  const [state, setState] = useState<appState>("connecting");

  const sendMessage = (channel: string, msg: string) => {
    if (mqttClient !== undefined) mqttClient.publish(channel, msg);
  };

  const messageArrived = (msg: string) => {};

  useEffect(() => {
    const client = mqtt.connect("wss://stastnyj.duckdns.org:9001/mqtt");

    client.on("connect", () => {
      client.subscribe("presentGameController");
      setState("connected");
    });

    client.on("message", function (topic, message) {
      messageArrived(message.toString());
    });

    client.on("disconnect", () => setState("connectionLost"));

    setMqttClient(client);
  }, []);

  return (
    <FullScreen handle={useFullScreenHandle()}>
      {state === "connecting" ? (
        <LoadingPage />
      ) : state === "failed" || state === "connectionLost" ? (
        <ErrorPage />
      ) : (
        // <HanoiTowersControll sendMessage={sendMessage} />
        // <BasketballControll sendMessage={sendMessage} />
        // <KillYourRefereeControll sendMessage={sendMessage} />
        <TetrsControll sendMessage={sendMessage} />
      )}
    </FullScreen>
  );
}

export default App;
