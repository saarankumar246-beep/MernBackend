import UserList from "./UserList";

function UserContainer() {

  const users = [
    { id: 1, name: "Rahul", age: 22 },
    { id: 2, name: "Arjun", age: 25 },
    { id: 3, name: "Priya", age: 23 }
  ];

  return (
    <div>
      <h2>User List</h2>
      <UserList users={users} />
    </div>
  );
}

export default UserContainer;