import "./App.css";
import Home from "./components/home";
import Projects from "./components/projects";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import data from "./projectsData.json"; // Assuming this is your JSON data

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />}></Route>
          <Route path="/projektit" element={<Projects projects={data} />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
