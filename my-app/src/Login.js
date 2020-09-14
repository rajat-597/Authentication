import React, { Component } from 'react';
import './App.css';
import axios from "axios";
class Login extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }
        this.login = this.login.bind(this);
    }
    ChangeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    async login(event) {
        event.preventDefault();
        let record = {
            "email": this.state.email,
            "password": this.state.password
        }
        console.log(record);
        try {
            let status = await axios.post("http://3.131.96.181/vichayan/api/login", record);
            console.log(status.data);
        }
        catch (e) {
            console.log(e);
            alert("Login Failed");
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="navheader PageHeading center">
                    <h1>Login Page</h1>
                    <form>
                        <div>
                            <input type="email" name="email" className="item" placeholder="Enter Email" onChange={this.ChangeHandler} />
                        </div>
                        <div>
                            <input type="password" name="password" className="item" placeholder="Enter Password" onChange={this.ChangeHandler} />
                        </div>
                        <button type="submit" className="item logo" onClick={this.login}>Login</button>
                    </form>
                </div>
            </React.Fragment>
        )
    };
};
export default Login;