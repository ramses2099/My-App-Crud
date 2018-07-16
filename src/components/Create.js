import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Create extends Component {
  constructor() {
    super();
    this.state = {     
      FirstName: "",
      LastName: "",
      Phone: "",
      Email: ""
    }
    
    //binding the state to the event
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  //get all values
  onChange(e){
    e.preventDefault();

    const state = this.state;

    state[e.target.name] = e.target.value;

    this.setState(state);
  }
  //
  onSubmit(e) {
    e.preventDefault();

    const url = 'http://localhost/WebApi/api/People';

    const { FirstName, LastName, Phone, Email } = this.state;

    const people = {
      "Id": 0,
      "FirstName": FirstName,
      "LastName": LastName,
      "Phone": Phone,
      "Email": Email
    };
  
    axios(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
       },
      data: JSON.stringify(people)
    }).catch(err =>{
      console.log(err);
    });

  }

  render() {
    const { FirstName, LastName, Phone, Email } = this.state;
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              ADD CONTACT
              </h3>
          </div>
          <div className="panel-body">
            <h4><Link to="/"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span> Contacts List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="FirstName">First Name:</label>
                <input type="text" className="form-control" name="FirstName" value={FirstName} onChange={this.onChange} placeholder="First Name" />
              </div>
              <div className="form-group">
                <label htmlFor="LastName">Last Name:</label>
                <input type="text" className="form-control" name="LastName" value={LastName} onChange={this.onChange} placeholder="Last Name" />
              </div>
              <div className="form-group">
                <label htmlFor="Phone">Phone:</label>
                <input type="text" className="form-control" name="Phone" value={Phone} onChange={this.onChange} placeholder="Phone" />
              </div>
              <div className="form-group">
                <label htmlFor="Email">Email:</label>
                <input type="email" className="form-control" name="Email" value={Email} onChange={this.onChange} placeholder="Email Address" />
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}


export default Create;