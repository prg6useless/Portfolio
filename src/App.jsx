import AllProjectsLayout from "./Components/AllProjectsLayout";
import MainLayout from "./Components/MainLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {" "}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/allprojects" element={<AllProjectsLayout />} />{" "}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
