import React from "react";

const HomePage = (props) => {
    return (
        <>
            <h1> {props.data.name} </h1>
            <h2> {props.data.established} </h2>
            <h3> {props.data.description} </h3>
        </>
    );
}

export default HomePage;
