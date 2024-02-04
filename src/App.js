import { useEffect, useState } from "react";
import "./components/css/elements.css";
import "./components/css/root.css";
import "./components/css/uiverse.css";
import RouterFiles from "./components/router/RouterFiles";
import "react-creative-cursor/dist/styles.css";
import image from "./components/media/IMG_4471.jpeg";
import ReactLoading from "react-loading";
function App() {
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 5500);
  }, []);
  return (
    <div className="App m-0 p-0">
      {loading ? (
        <div className="divs vh-100 vw-100 overflow-hidden d-flex align-items-center">
          <ReactLoading color={"#e97ab4"} type="spinningBubbles" height={100} width={100} className="my-auto mx-auto"/>
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
