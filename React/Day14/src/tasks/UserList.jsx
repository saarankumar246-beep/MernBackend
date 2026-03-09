
function UserList({ users }) {
  return (
    <div>
      {users.map((user) => (
        <p key={user.id}>
          Name: {user.name} | Age: {user.age}
        </p>
      ))}
    </div>
  );
}

export default UserList;