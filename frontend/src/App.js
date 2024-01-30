import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import SuvNav from "./components/SavNav";
import { Outlet } from "react-router-dom";

// import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <SuvNav />
      <main className="mt-20 mb-32">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
