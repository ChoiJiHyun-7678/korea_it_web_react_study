import { Children } from "react"
import Header from "../Header/Header"

inport * as s from "./style"
function layout({Children}) {
  return (
    <div>
      <Header/>
      {Children}
    </div>
  )
}

export default layout