import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import MainPage from "./components/MainPage"
import NavbarTop from "./components/NavbarTop"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ArticleDetailPage from "./components/ArticleDetailPage"
import JumbotronMain from "./components/JumbotronMain"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarTop />
        <JumbotronMain />
        <Routes>
          <Route element={<MainPage />} path="/" />
          <Route element={<ArticleDetailPage />} path="/articles/:id" />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
