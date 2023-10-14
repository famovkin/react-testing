const User = ({ user, onDelete }) => {
  return (
    <li id="user" style={{ padding: 10, border: '1px solid blue' }} key={user.id}>
      {`${user.id}. ${user.name}`}
      <button id="user-delete" onClick={() => onDelete(user.id)}>
        delete
      </button>
    </li>
  );
};

export default User;
