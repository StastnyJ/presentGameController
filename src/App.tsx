import React, { useEffect, useState } from "react";
import LoadingPage from "./Pages/Loading";
import mqtt from "mqtt";
import ErrorPage from "./Pages/ErrorPage";
import { getConrollers } from "./Pages/Controllers/Controllers";
import "./App.css";

type appState = "connected" | "connecting" | "connectionLost" | "failed";

function App() {
  const [mqttClient, setMqttClient] = useState<mqtt.MqttClient | undefined>(undefined);
  const [actController, setActController] = useState("Intro");
  const [state, setState] = useState<appState>("connecting");

  const sendMessage = (channel: string, msg: string) => {
    if (mqttClient !== undefined) mqttClient.publish(channel, msg);
  };

  const messageArrived = (msg: string) => {
    if (msg.startsWith("requestController:")) setActController(msg.replace("requestController:", ""));
  };

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

  const controllers = getConrollers(sendMessage);

  return (
    <>
      {state === "connecting" ? (
        <LoadingPage />
      ) : state === "failed" || state === "connectionLost" ? (
        <ErrorPage />
      ) : (
        controllers[actController]
      )}
    </>
  );
}

export default App;
