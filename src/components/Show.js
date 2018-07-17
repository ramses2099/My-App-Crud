import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Show extends Component {
  constructor(props){
    super(props);
    this.state ={
      contact:{}
    };
  }

  componentDidMount() {
   const url ='http://localhost/WebApi/api/People/'
     
    axios.get(url+this.props.match.params.id)
      .then(res => {
        this.setState({ contact: res.data });
        console.log(this.state.contact);
      });
  }

  delete(id){
    const url ='http://localhost/WebApi/api/People/'     
    console.log(id);
    axios.delete(url+id)
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {

    const { Id,FirstName, LastName, Phone, Email } = this.state.contact;

    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              Contact Details
          </h3>
          </div>
          <div className="panel-body">
            <h4><Link to="/"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span> Contacts List</Link></h4>
            <dl>
              <dt>First Name:</dt>
              <dd>{FirstName}</dd>
              <dt>Last Name:</dt>
              <dd>{LastName}</dd>
              <dt>Phone:</dt>
              <dd>{Phone}</dd>
              <dt>Email</dt>
              <dd>{Email}</dd>             
            </dl>
            <Link to={`/edit/${Id}`} className="btn btn-success">Edit</Link>&nbsp;
          <button onClick={this.delete.bind(this, Id)} className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Show;