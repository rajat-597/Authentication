import React, { Component } from 'react';
import './App.css';
import axios from "axios";
class Registration extends Component {
  constructor() {
    super();
    this.state = {
      Name: '',
      Email: '',
      Password: '',
      Password_confirmation: ''
    }

    this.register = this.register.bind(this);
  }
  ChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  async register(event) {
    event.preventDefault();
    let record = {
      "name": this.state.Name,
      "email": this.state.Email,
      "password": this.state.Password,
      "password_confirmation": this.state.Password_confirmation
    };
    try {
      let status = await axios.post("http://3.131.96.181/vichayan/api/register", record);
      console.log(status);
    }
    catch (e) {
      alert("Registration Failed");
      console.log(e);
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="navheader PageHeading center">
          <h1>Registration Form</h1>
          <form>
            <div>
              <input type="text" name="Name" className="item" placeholder="Enter Name" onChange={this.ChangeHandler} />
            </div>
            <div>
              <input type="text" name="Email" className="item" placeholder="Enter Email" onChange={this.ChangeHandler} />
            </div>
            <div>
              <input type="password" name="Password" className="item" placeholder="Enter Password" onChange={this.ChangeHandler} />
            </div>
            <div>
              <input type="password" name="Password_confirmation" className="item" placeholder="Enter conPassword" onChange={this.ChangeHandler} />
            </div>

            <button type="submit" className="item logo" onClick={this.register}>SignUp</button>
          </form>
        </div>
      </React.Fragment>
    )
  };
};

export default Registration;
