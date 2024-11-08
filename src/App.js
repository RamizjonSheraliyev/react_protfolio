import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import About from "./components/about/about";
import Experience from "./components/experience/experience";
import Services from "./components/services/services";
import Portfoilo from "./components/protfoilo/portfoilo";
import Testminolias from "./components/testimonials/testminolias";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfoilo />
      <Testminolias />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
