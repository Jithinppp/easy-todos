import React from "react";
import { useParams } from "react-router-dom";
import PlaceList from "../components/PlaceList";

const UserPlaces = () => {
  const DUMMY_PLACES = [
    {
      id: 1,
      title: "Burj Khalifa",
      desc: "one of the best sky scrapers in the world",
      imageUrl:
        "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/fa/ec/bb.jpg",
      address:
        "1 Sheikh Mohammed bin Rashid Blvd - Downtown Dubai - Dubai - United Arab Emirates",
      location: {
        lat: 25.197197,
        lng: 55.2743764,
      },
      creator: "u1",
    },
    {
      id: 2,
      title: "Taj Mahal",
      desc: "the ancient beauty of india",
      imageUrl: "https://pbs.twimg.com/media/DowPoYTXUAAWnJm.jpg:large",
      address: "Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001",
      location: {
        lat: 27.1751448,
        lng: 78.0399535,
      },
      creator: "u1",
    },
    {
      id: 3,
      title: "Taj Mahal",
      desc: "the ancient beauty of india",
      imageUrl: "https://pbs.twimg.com/media/DowPoYTXUAAWnJm.jpg:large",
      address: "Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001",
      location: {
        lat: 27.1751448,
        lng: 78.0399535,
      },
      creator: "u3",
    },
    {
      id: 4,
      title: "Taj Mahal",
      desc: "the ancient beauty of india",
      imageUrl: "https://pbs.twimg.com/media/DowPoYTXUAAWnJm.jpg:large",
      address: "Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001",
      location: {
        lat: 27.1751448,
        lng: 78.0399535,
      },
      creator: "u4",
    },
  ];

  const { uid } = useParams();

  const filteredPlaces = DUMMY_PLACES.filter((place) => place.creator === uid);
  return <PlaceList places={filteredPlaces} />;
};

export default UserPlaces;
