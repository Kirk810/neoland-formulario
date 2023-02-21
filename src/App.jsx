import './App.css'
import { Routes, Route } from "react-router-dom";
import Form from "./pages/Form";
import API from "./pages/API.jsx";
import Header from "./complements/Header";

function App() {


  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/api" element={<API />} />
        </Routes>
    </div>
  )
}

export default App
