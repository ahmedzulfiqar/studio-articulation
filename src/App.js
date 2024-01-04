import { useEffect, useState } from "react";
import "./components/css/elements.css";
import "./components/css/root.css";
import "./components/css/uiverse.css";
import RouterFiles from "./components/router/RouterFiles";
import { Cursor } from "react-creative-cursor";
import "react-creative-cursor/dist/styles.css";
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
        <section class="dots-container vh-100">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </section>
      ) : (
        <div className="row m-0">
          <RouterFiles />
        </div>
      )}
    </div>
  );
}

export default App;
