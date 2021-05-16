import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Routes from "./navigation";
import ChatBot from "./components/ChatBot";

function App() {
  return (
    <div>
      <Routes />
      <ChatBot />
    </div>
  );
}

export default App;
