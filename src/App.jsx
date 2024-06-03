import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";  // Correct import for your routes

const App = () => {
  return (
    <div className="App">
      <Router>
        <AppRoutes />
      </Router>
    </div>
  );
};

export default App;
