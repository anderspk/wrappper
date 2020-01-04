import React from "react";
import "./App.scss";
import Header from "./components/header/header";
import { AnimatePresence, motion } from "framer-motion";
import Routes from "./routes";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
};

export default App;
