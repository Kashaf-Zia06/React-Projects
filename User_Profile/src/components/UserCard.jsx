import "./UserCard.css";

function UserCard({ user }) {
  return (
    <div className="card">
      <p className="name">{user.name}</p>
      <p>{user.email}</p>
      <span className="role">{user.role}</span>
    </div>
  );
}

export default UserCard;