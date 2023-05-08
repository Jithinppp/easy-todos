import React, { useState } from "react";
import Card from "../../shared/components/Card/Card";
import Button from "../../shared/components/Button/Button";
import { BiMap } from "react-icons/bi";
import Modal from "../../shared/components/Modal/Modal";

const PlaceItem = ({ imageUrl, title, id, address, location }) => {
  const [mapModal, setMapModal] = useState(false);

  const showMapModalHandler = () => {
    setMapModal(true);
    console.log(mapModal);
  };
  const hideMapModalHandler = () => {
    setMapModal(false);
    console.log(mapModal);
  };
  return (
    <>
      {mapModal && (
        <Modal className="justify-center">
          <div className="bg-white h-1/2 w-1/2 opacity-1 z-50">
            <Button className="bg-red-600" onClick={hideMapModalHandler}>
              Close
            </Button>
          </div>
        </Modal>
      )}
      <Card className="my-2 flex flex-col w-96 p-0">
        <img src={imageUrl} alt={title} />
        <div className="my-2 px-2">
          <h1 className="text-xl font-semibold tracking-tighter">{title}</h1>
          <h4 className="font-light text-sm">{address}</h4>
          <div className="flex items-center justify-between">
            <Button className="flex items-center" onClick={showMapModalHandler}>
              <BiMap className="text-sm mr-1" /> View on map
            </Button>
            <div>
              <Button link={true} to={`places/${id}`}>
                Edit
              </Button>
              <Button className="bg-red-600 ml-5">Delete</Button>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default PlaceItem;
