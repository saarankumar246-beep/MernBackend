import Counter from "./tasks/Counter"
import EvenOdd from "./tasks/EvenOdd"
import FormExample from "./tasks/FormExample"
import LiveInput from "./tasks/LiveInput"
import LoginStatus from "./tasks/LoginStatus"
import Product from "./tasks/Product"
import RemoveItem from "./tasks/RemoveItem"
import Skills from "./tasks/Skills"
import StudentResult from "./tasks/StudentResult"
import ToggleMode from "./tasks/ToggleMode"
import UpdateAge from "./tasks/UpdateAge"
import UpdateName from "./tasks/UpdateName"

const App = () => {
  return (
    <div>
      <Counter /> <hr />

      <LiveInput /> <hr />

      <ToggleMode /> <hr />

      <LoginStatus /> <hr />

      <UpdateName /> <hr />

      <UpdateAge /> <hr />

      <Skills /> <hr />

      <RemoveItem /> <hr />

      <StudentResult /> <hr />

      <EvenOdd /> <hr />

      <FormExample /> <hr />

      <Product />
    </div>
  )
}

export default App
