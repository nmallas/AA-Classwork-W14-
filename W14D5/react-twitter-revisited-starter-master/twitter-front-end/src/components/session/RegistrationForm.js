import React from "react";

class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: ""
        };
    }

    updateAttribute = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    registerUser = async e => {
        console.log(this.state);
        e.preventDefault();
        try {
            let res = await fetch("/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(this.state)
            })
            if(res.ok) {
                let data = await res.json();
                console.log(data);
            } else {
                throw res;
            }
        } catch(e) {
            console.log(e);
        }
    }

    render() {
        const {username, email, password} = this.state;
        return(
            <form onSubmit={this.registerUser}>
                <h2>Register</h2>
                <input
                    name="username"
                    placeholder="Enter Username"
                    value={username}
                    onChange={this.updateAttribute}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Enter Email Address"
                    value={email}
                    onChange={this.updateAttribute}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={this.updateAttribute}
                />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default RegistrationForm;
