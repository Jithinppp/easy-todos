import React from "react";
import PlaceItem from "./PlaceItem";

const PlaceList = (props) => {
  if (props.places.length <= 0) {
    return <div>no places found add new ?</div>;
  }
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {props.places.map((place) => (
        <PlaceItem
          id={place.id}
          desc={place.desc}
          imageUrl={place.imageUrl}
          address={place.address}
          location={place.location}
          title={place.title}
          key={place.id}
        />
      ))}
    </div>
  );
};

export default PlaceList;
