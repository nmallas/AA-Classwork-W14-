import React from "react";
import PetDetailList from "./petDetailList";

const PetDetail = (props) =>
    <PetDetailList pet={props.pet}></PetDetailList>
    ;

PetDetailList.defaultProps = {
    pet: {PetType: {type:"loading..."}, name: "loading...", age: "loading..."},
};
export default PetDetail;
