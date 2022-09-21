// import logo from "./logo.svg";
import { useEffect, useState } from "react";
// import "./App.css";
import Loader from "./components/loader/loader";
import Home from "./components/home/home";

function App() {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  });
  return (
    <>
      {loader ? (
        <div>
          <Loader />
        </div>
      ) : (
        <Home />
      )}
    </>
  );
}

export default App;
