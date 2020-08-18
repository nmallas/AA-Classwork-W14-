import React from "react";
import PetDetailList from "./petDetailList";
import OwnerList from "./ownerList"

const PetDetail = (props) =>
    <>
        <PetDetailList pet={props.pet}></PetDetailList>
        <OwnerList owners={props.pet.Owners} />
    </>
    ;

PetDetail.defaultProps = {
    pet: {PetType: {type:"loading..."}, name: "loading...", age: "loading...", }
};


export default PetDetail;
