import { Route, Routes } from 'react-router-dom'
import FetchDatasw from './component/FetchDatasw'
import Home from './component/Home'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path="/assinment1" element={<FetchDatasw/>} />
    </Routes>
    </>  )
}

export default App