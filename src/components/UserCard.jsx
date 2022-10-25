import { deleteUserRequest } from "../api/user.api";

function UserCard({ user }) {
  const handleDelete = async (id) => {
    try {
      const response = await deleteUserRequest(id);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>{user.id}</h1>
      <h2>{user.login}</h2>
      <span>{user.password}</span>
      <button>Edit</button>
      <button onClick={() => handleDelete(user.id)}>Delete</button>
    </div>
  );
}

export default UserCard;
