import React from "react";

const AboutPage = (props) => {
    return (
        <>
            <h1> {props.data.name}</h1>
            <p> {props.data.about.story}</p>
        </>
    );
}

export default AboutPage;
