import React from "react";
import Cookies from "js-cookie";
import UserContext from "./contexts/UserContext";
import App from "./App";

class AppWithContext extends React.Component {
    constructor() {
        super();
        let authToken = Cookies.get("token");
        let currentUserId = null;
        if(authToken) {
            try {
                const payload = authToken.split(".")[1];
                const decodedPayload = atob(payload);
                const payloadObj = JSON.parse(decodedPayload);
                const { data: { id }} = payloadObj;
                currentUserId = id;
            } catch(e) {
                authToken = null;
                Cookies.remove('token');
            }
        }
        this.state = {
            authToken: authToken || null,
            currentUserId: currentUserId,
            updateContext: this.updateContext
        };
    }

    updateContext = (authToken, currentUserId) => {
        this.setState({ authToken, currentUserId }, () => {
          console.log(this.state);
        });
    }

    render() {
        return (
            <UserContext.Provider value={this.state}>
                <App currentUserId={this.state.currentUserId}/>
            </UserContext.Provider>
        )
    }
}

export default AppWithContext;
