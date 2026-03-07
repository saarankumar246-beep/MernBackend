import AdminPanel from "./task/AdminPanel"
import AgeStatus from "./task/AgeStatus"
import FruitList from "./task/FruitList"
import LoginStatus from "./task/LoginStatus"
import UserDetails from "./task/UserDetails"
import UserInfo from "./task/UserInfo"
import UsersList from "./task/UsersList"


const App = () => {
  return (
    <div>
      <UserDetails />

      <UserInfo />

      <FruitList />

      <UsersList />

      <LoginStatus />

      <AgeStatus />

      <AdminPanel />
    </div>
  )
}

export default App
