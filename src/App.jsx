import "./App.css";
import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Feedback from "react-bootstrap/esm/Feedback";

// base component for employee managment system
// const App = () => {
//   return (
//     <Router>
//       <Container>
//         {" "}
//         {/* Using Container from React Bootstrap */}
//         <Routes>
//           <Route path="/" element={<EMPDirectory />}>
//             <Route index element={<ListEmployees />} />
//             <Route path="create-emp" element={<EMPCreate />} />
//             <Route path="employee/:emp_id" element={<EmpDetail />} />
//             <Route path="upcoming-retire" element={<UpcomingRetirement />} />
//           </Route>
//         </Routes>
//       </Container>
//     </Router>
//   );
// };

const App = () => {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Footer />
      <Feedback />
    </div>
  );
};

export default App;
