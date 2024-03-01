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

  <Route path="/*" element={<HomePage/>} />
  <Route path="/message" element={<Message/>} />
  <Route path="/*" element={<Authentication/>} />
   
</Routes>

    </div>
  );
}

export default App;
