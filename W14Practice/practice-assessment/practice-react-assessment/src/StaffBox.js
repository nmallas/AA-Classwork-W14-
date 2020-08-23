import React from "react";

const StaffBox = (props) => {
    let {name, title, photo} = props.member;
    return (
        <div className="staff-box">
            <div className="staff-box__name">{name}</div>
            <div className="staff-box__title">{title}</div>
            <img className="staff-box__photo" src={photo}/>
        </div>
    )
}

export default StaffBox;
