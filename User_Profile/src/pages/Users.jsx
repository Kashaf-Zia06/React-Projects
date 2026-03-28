import { useNavigate } from "react-router-dom";
import UserCard from "../components/UserCard";
import "./Users.css";

function Users({ users }) {
  const navigate = useNavigate();

  return (
    <div id="users">
      <h1>PeopleBoard</h1>
      <h3>Registered Users</h3>

      {users.length === 0
        ? <p>No users yet.</p>
        : <div id="grid">
            {users.map((user, index) => (
              <UserCard key={index} user={user} />
            ))}
          </div>
      }

      <button onClick={() => navigate("/")}>Register Another</button>
    </div>
  );
}

export default Users;