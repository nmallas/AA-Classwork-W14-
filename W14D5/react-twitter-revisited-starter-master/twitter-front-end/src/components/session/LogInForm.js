import React from "react";
import UserContext from "../../contexts/UserContext";

class LogInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = async e => {
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value})
        try{
            const res = await fetch("/users/token", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(this.state)
            })
            if(res.ok) {
                let user = await res.json();
                if(user.token) {
                    this.props.login(user.token, user.user.id)
                }
            }
        } catch(e) {
            console.log(e)
        }
    }

    updateInput = e => {
        const {name, value} = e.target;
        this.setState({[name]: value})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Log In</h2>
                <input type="email" name="email" value={this.state.email} onChange={this.updateInput} placeholder="Enter Email Address" />
                <input type="password" name="password" value={this.state.password} onChange={this.updateInput} placeholder="Enter Password"/>
                <button type="submit"> Log In </button>
            </form>
        );
    }
};

const LogInFormWithContext = () => (
    <UserContext.Consumer>
        {value => <LogInForm login={value.login} props={value} />}
    </UserContext.Consumer>
)

export default LogInFormWithContext;
