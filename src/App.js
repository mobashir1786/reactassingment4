import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Student from "./component/Student";
import Contact from "./component/Contact";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Student" element={<Student />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}
