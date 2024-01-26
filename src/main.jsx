import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import ReactGA from "react-ga4";

ReactGA.initialize("G-1503LXE8MQ"); // measurement ID

ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Router>
      <App />
    </Router>
  </>
);
