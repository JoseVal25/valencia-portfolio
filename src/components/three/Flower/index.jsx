import React from "react";
import FirstPetals from "../FirstPetals";
import SecondPetals from "../SecondPetals";
import SmallPetals from "../SmallPetals";
import Pistil from "../Pistil";

const flower = () => {
  return (
    <>
      <FirstPetals />
      <SecondPetals />
      <SmallPetals />
      <Pistil />
    </>
  );
};

export default flower;
