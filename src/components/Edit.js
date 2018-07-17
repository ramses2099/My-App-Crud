import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    const url ='http://localhost/WebApi/api/People/'+this.props.match.params.id;
    axios.get(url)
    .then(res =>{
      this.setState({contact: res.data});
      console.log(this.state.contact);
    })

  }

  onChange(e) {
    const state = this.state.contact;
    state[e.target.name] = e.target.value;
    this.setState({contact:state});
  }

  onSubmit(e) {
    const url = 'http://localhost/WebApi/api/People'+this.props.match.params.id;

    const { Id,FirstName, LastName, Phone, Email } = this.state;

    const people = {
      "Id": Id,
      "FirstName": FirstName,
      "LastName": LastName,
      "Phone": Phone,
      "Email": Email
    };
  
    axios(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
       },
      data: JSON.stringify(people)
    }).then(res =>{
      this.props.history.push('/show/'+this.props.match.params.id);
    }).catch(err =>{
      console.log(err);
    });
   
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}

export default Edit;