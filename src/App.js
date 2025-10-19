// import logo from "./logo.svg";
// import "./App.css";

import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import Tours from "./components/Tours";
import Footer from "./components/Footer";

function App() {
  console.log("hello ");
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Tours />
      <Footer />
    </>
  );
}

export default App;
