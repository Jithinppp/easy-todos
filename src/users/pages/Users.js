import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: 1,
      name: "jithin P",
      image: "/user-image.jpg",
      places: 3,
    },
    {
      id: 2,
      name: "Raju",
      image: "/user-image.jpg",
      places: 3,
    },
    {
      id: 3,
      name: "chutky",
      image: "/user-image.jpg",
      places: 3,
    },
  ];
  return <UsersList users={USERS} />;
};

export default Users;
