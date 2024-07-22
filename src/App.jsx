import Navbar from "./components/Navbar"
import Home from "./views/Home"
import About from "./views/About"
import { Route, Routes } from 'react-router-dom'
import Login from "./views/Login"

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
