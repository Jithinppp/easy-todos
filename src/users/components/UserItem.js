import React from "react";
import { Link } from "react-router-dom";
import Card from "../../shared/components/Card/Card";

const UserItem = ({ id, name, image, placeCount }) => {
  return (
    <li className="my-1 ">
      <Link to={id + "/places"}>
        <Card className="w-60">
          <img
            src={image}
            alt={name}
            className="rounded-full h-16 w-16 object-cover"
          />
          <div className="mx-5 text-black">
            <h2 className="text-xl font-bold">{name}</h2>
            <h2>{placeCount} places</h2>
          </div>
        </Card>
      </Link>
    </li>
  );
};

export default UserItem;
