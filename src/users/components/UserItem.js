import React from "react";
import { Link } from "react-router-dom";
import Card from "../../shared/components/Card/Card";

const UserItem = ({ id, name, image, placeCount }) => {
  return (
    <li className="my-1">
      <Link to={`u${id}/places`}>
        <Card className="p-4">
          <img
            src={image}
            alt={name}
            className="rounded-full h-16 w-16 object-cover"
          />
          <div className="mx-5 text-black">
            <h2 className="text-xl font-semibold tracking-tighter">{name}</h2>
            <h2 className="text-sm">{placeCount} places</h2>
          </div>
        </Card>
      </Link>
    </li>
  );
};

export default UserItem;
