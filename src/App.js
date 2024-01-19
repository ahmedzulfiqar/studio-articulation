import { useEffect, useState } from "react";
import "./components/css/elements.css";
import "./components/css/root.css";
import "./components/css/uiverse.css";
import RouterFiles from "./components/router/RouterFiles";
import "react-creative-cursor/dist/styles.css";
import image from "./components/media/IMG_4471.jpeg";
function App() {
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 3500);
  }, []);
  return (
    <div className="App m-0 p-0">
      {loading ? (
        <div className="divs vh-100 vw-100 overflow-hidden">
          <img src={image} alt="" width={"250px"} className="seting"/>
        </div>
      ) : (
        <div className="row m-0">
          <RouterFiles />
        </div>
      )}
    </div>
  );
}

export default App;
