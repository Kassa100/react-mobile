import React from "react"
import { BrowserRouter } from "react-router-dom"
import IndexRouter from "./router"

export default function App(props) {
  return (
    <BrowserRouter>
      <div className='App'>
        <IndexRouter />
      </div>
    </BrowserRouter>
  )
}