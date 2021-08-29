import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Header />
      <Footer />
    </React.Fragment>
  );
}

export default App;
