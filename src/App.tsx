import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Store from "./pages/Store";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar/Navbar";
import './App.css'

function App() {

  return (
    <>
    <Navbar />
    <Container className="mb-4">
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store/>} />
        <Route path="/about" element={<About />} />
          </Routes>
    </Container>
    </>

  )
}

export default App
