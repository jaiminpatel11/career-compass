import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import Routes from './routes';


const App = () => {
  return (
    <div className="App">
      <Routes />
    </div>
  );
};

export default App;
