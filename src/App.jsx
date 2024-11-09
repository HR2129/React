import React ,{ useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Glass from "./components/Glass/Glass.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="container">
        <Navbar />
        <Glass />
      </div>
      <Footer/>
    </>
  );
}

export default App;
