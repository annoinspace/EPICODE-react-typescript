import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import MainPage from "./components/MainPage"
import NavbarTop from "./components/NavbarTop"

function App() {
  return (
    <div className="App">
      <NavbarTop />
      <MainPage />
    </div>
  )
}

export default App
