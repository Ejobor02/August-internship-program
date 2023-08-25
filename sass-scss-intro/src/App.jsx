import "./style/App.scss";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
