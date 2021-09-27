import React from "react"
import { BrowserRouter } from "react-router-dom"
// import Frame from "./components/Frame"
import IndexRouter from "./router"

export default function App(props) {
  return (
    <BrowserRouter>
      {/* <Frame > */}
      <IndexRouter />
      {/* </Frame> */}
    </BrowserRouter>
  )
}