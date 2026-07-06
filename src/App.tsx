import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Dashboard from "./pages/Dashboard";
import Triage from "./pages/Triage";
import MaternalHealth from "./pages/MaternalHealth";
import Education from "./pages/Education";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/triage" element={<Triage />} />
          <Route path="/maternal-health" element={<MaternalHealth />} />
          <Route path="/education" element={<Education />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
