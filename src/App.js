import Authentication from "./pages/Authenticate/Authentication";
import HomePage from "./pages/HomePage/HomePage";
import Message from "./pages/Message/Message";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Grid } from "@mui/material";



function App() {
  return (
    <div className="">
<Routes>
  <Route path="/" element={<Authentication/>} />
  <Route path="/home" element={<HomePage/>} />
  <Route path="/message" element={<Message/>} />
   
</Routes>

    </div>
  );
}

export default App;
