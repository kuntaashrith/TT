import { Routes, Route } from "react-router-dom";
import Reg from "./reg"
import Home from "./home"
function App() {
  return(
    <>
    <h1>I am app</h1>
    <Routes>
      <Route path="/reg" element={<Reg/>}/>
      <Route path="/login" element={<Home/>}/>
    </Routes>
    </>
  )
}

export default App;