import React from "react";
import StaffBox from "./StaffBox";

const StaffPage = (props) => {
    let staff = props.data;
    return (
        <>
            {staff.map(el => (
                <StaffBox member={el} key={el.id} />
            ))}
        </>
    )
}

export default StaffPage;
