import React from "react";
import UserItem from "./UserItem";

const UsersList = (props) => {
  if (props.users.length === 0) {
    return <div>No users found!</div>;
  }
  return (
    <ul>
      {props.users.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.places}
        />
      ))}
    </ul>
  );
};

export default UsersList;
