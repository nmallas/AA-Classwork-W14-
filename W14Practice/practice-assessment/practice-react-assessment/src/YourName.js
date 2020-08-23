import React from "react";
import NameContext from "./NameContext";

class YourName extends React.Component {
    render() {
        return (
            <NameContext.Consumer>
                {value => <input value={value.name} onChange={value.changeName}/>}
            </NameContext.Consumer>
        )
    }
}

export default YourName;
